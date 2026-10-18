import React, { useEffect, useRef } from 'react';

interface NodePoint {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseAlpha: number;
  label?: string;
  isHub?: boolean;
}

interface Pulse {
  fromIndex: number;
  toIndex: number;
  progress: number;
  speed: number;
}

export const GlobalNetworkCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      height = canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;
      initNodes();
    };

    window.addEventListener('resize', handleResize);

    const hubs = [
      { label: 'London Tech Hub', nx: 0.18, ny: 0.28 },
      { label: 'Berlin AI Lab', nx: 0.28, ny: 0.22 },
      { label: 'Milan Fashion Tech', nx: 0.26, ny: 0.42 },
      { label: 'Amsterdam Vision', nx: 0.22, ny: 0.34 },
      { label: 'FlyWy Core Bridge', nx: 0.50, ny: 0.48 },
      { label: 'Lahore Flagship Cluster', nx: 0.76, ny: 0.38 },
      { label: 'Karachi Retail Center', nx: 0.82, ny: 0.58 },
      { label: 'Islamabad Innovation', nx: 0.72, ny: 0.24 },
    ];

    let nodes: NodePoint[] = [];
    let pulses: Pulse[] = [];

    const initNodes = () => {
      nodes = [];
      pulses = [];

      // Add major geo-hub nodes
      hubs.forEach((hub) => {
        nodes.push({
          x: hub.nx * width,
          y: hub.ny * height,
          vx: (Math.random() - 0.5) * 0.15,
          vy: (Math.random() - 0.5) * 0.15,
          radius: hub.label.includes('FlyWy') ? 5 : 4,
          baseAlpha: 0.8,
          label: hub.label,
          isHub: true,
        });
      });

      // Add ambient background network nodes
      const ambientCount = Math.min(Math.floor((width * height) / 35000), 35);
      for (let i = 0; i < ambientCount; i++) {
        nodes.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.35,
          vy: (Math.random() - 0.5) * 0.35,
          radius: Math.random() * 2 + 1.2,
          baseAlpha: Math.random() * 0.4 + 0.15,
        });
      }
    };

    initNodes();

    let mouseX = -1000;
    let mouseY = -1000;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Pulse spawn timer
    let lastPulseTime = 0;

    const render = (time: number) => {
      ctx.clearRect(0, 0, width, height);

      // Subtle tech grid lines
      ctx.strokeStyle = 'rgba(0, 141, 218, 0.035)';
      ctx.lineWidth = 1;
      const gridSize = 60;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Update nodes positions with boundary damping
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 10) {
          node.x = 10;
          node.vx *= -1;
        } else if (node.x > width - 10) {
          node.x = width - 10;
          node.vx *= -1;
        }

        if (node.y < 10) {
          node.y = 10;
          node.vy *= -1;
        } else if (node.y > height - 10) {
          node.y = height - 10;
          node.vy *= -1;
        }

        // Mouse hover nudge
        const dx = mouseX - node.x;
        const dy = mouseY - node.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120 && dist > 0) {
          const force = (120 - dist) / 120;
          node.x -= (dx / dist) * force * 1.5;
          node.y -= (dy / dist) * force * 1.5;
        }
      }

      // Draw connection lines between nearby nodes
      const maxConnectDist = Math.min(width * 0.22, 180);
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const n1 = nodes[i];
          const n2 = nodes[j];
          const dx = n1.x - n2.x;
          const dy = n1.y - n2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          // Always connect major hubs to the FlyWy Core bridge
          const isCoreConnection =
            (n1.isHub && n2.label?.includes('FlyWy')) || (n2.isHub && n1.label?.includes('FlyWy'));

          if (dist < maxConnectDist || (isCoreConnection && dist < width * 0.55)) {
            let alpha = 1 - dist / maxConnectDist;
            if (isCoreConnection) {
              alpha = 0.35;
              ctx.strokeStyle = `rgba(0, 229, 255, ${alpha})`;
              ctx.lineWidth = 1.2;
            } else {
              alpha = Math.max(0, Math.min(0.22, alpha * 0.25));
              ctx.strokeStyle = `rgba(0, 141, 218, ${alpha})`;
              ctx.lineWidth = 0.8;
            }

            ctx.beginPath();
            ctx.moveTo(n1.x, n1.y);
            ctx.lineTo(n2.x, n2.y);
            ctx.stroke();
          }
        }
      }

      // Spawn periodic pulses along key hubs
      if (time - lastPulseTime > 1200 && nodes.length > 5) {
        lastPulseTime = time;
        const fromIdx = Math.floor(Math.random() * 4); // European hub
        const toIdx = 4; // FlyWy Core
        const pakIdx = 5 + Math.floor(Math.random() * 3); // Pakistani retail hub

        pulses.push({
          fromIndex: fromIdx,
          toIndex: toIdx,
          progress: 0,
          speed: 0.008 + Math.random() * 0.006,
        });

        pulses.push({
          fromIndex: toIdx,
          toIndex: pakIdx,
          progress: 0,
          speed: 0.009 + Math.random() * 0.005,
        });
      }

      // Update and draw pulses
      for (let p = pulses.length - 1; p >= 0; p--) {
        const pulse = pulses[p];
        pulse.progress += pulse.speed;

        if (pulse.progress >= 1) {
          pulses.splice(p, 1);
          continue;
        }

        const nStart = nodes[pulse.fromIndex];
        const nEnd = nodes[pulse.toIndex];
        if (nStart && nEnd) {
          const px = nStart.x + (nEnd.x - nStart.x) * pulse.progress;
          const py = nStart.y + (nEnd.y - nStart.y) * pulse.progress;

          ctx.fillStyle = '#00E5FF';
          ctx.shadowColor = '#008DDA';
          ctx.shadowBlur = 10;
          ctx.beginPath();
          ctx.arc(px, py, 2.5, 0, Math.PI * 2);
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      }

      // Draw nodes
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];

        if (node.isHub) {
          // Hub glow ring
          ctx.strokeStyle = 'rgba(0, 229, 255, 0.4)';
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.arc(node.x, node.y, node.radius * 2.2, 0, Math.PI * 2);
          ctx.stroke();

          // Hub core
          ctx.fillStyle = '#00E5FF';
          ctx.shadowColor = '#008DDA';
          ctx.shadowBlur = 12;
          ctx.beginPath();
          ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
          ctx.fill();
          ctx.shadowBlur = 0;

          // Label
          if (node.label && width > 768) {
            ctx.font = '10px "Plus Jakarta Sans", sans-serif';
            ctx.fillStyle = 'rgba(226, 232, 240, 0.7)';
            ctx.textAlign = 'center';
            ctx.fillText(node.label, node.x, node.y + node.radius + 14);
          }
        } else {
          // Ambient particle
          ctx.fillStyle = `rgba(0, 141, 218, ${node.baseAlpha})`;
          ctx.beginPath();
          ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-auto w-full h-full opacity-70"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    />
  );
};
