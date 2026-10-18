import express, { Request, Response } from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { GoogleGenAI, ThinkingLevel } from '@google/genai';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Initialize Google Gen AI client with required headers
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
  httpOptions: {
    headers: {
      'User-Agent': 'aistudio-build',
    },
  },
});

// In-memory store for demo inquiries
interface Inquiry {
  id: string;
  name: string;
  email: string;
  organization: string;
  partnerType: 'retailer' | 'tech_vendor' | 'investor';
  solutionInterest: string;
  storeCount?: string;
  message: string;
  createdAt: string;
}

const inquiries: Inquiry[] = [
  {
    id: 'INQ-1042',
    name: 'Taimur Qureshi',
    email: 'taimur.q@khaadi.com',
    organization: 'Khaadi Pakistan',
    partnerType: 'retailer',
    solutionInterest: 'AI Smart Mirrors & Fitting Rooms',
    storeCount: '25 Flagship Stores',
    message: 'Interested in evaluating 3 pilot stores in Dolmen Mall Clifton and Emporium Mall Lahore.',
    createdAt: new Date(Date.now() - 86400000 * 2).toISOString(),
  },
  {
    id: 'INQ-1043',
    name: 'Elena Rostova',
    email: 'elena@mirrortech-berlin.de',
    organization: 'MirrorTech GmbH (Berlin)',
    partnerType: 'tech_vendor',
    solutionInterest: 'Emerging Market Distribution',
    message: 'We develop ultra-slim 4K AR Smart Mirrors. Looking for exclusive distribution in South Asia retail chains.',
    createdAt: new Date(Date.now() - 86400000 * 1).toISOString(),
  },
];

// Endpoint: AI Retail Readiness & Strategic Advisor (Gemini-4-argon with ThinkingLevel.HIGH)
app.post('/api/advisor/evaluate', async (req: Request, res: Response) => {
  try {
    const { brandName, storeCount, category, currentReturnRate, primaryGoal, specificNotes } = req.body;

    const prompt = `
You are the Chief Retail Technologist and Strategic Advisor at FlyWy Bridge, the premier bridging agency connecting top European retail tech innovators (Smart Mirrors, AR Virtual Fitting Rooms, Computer Vision Analytics) with emerging market retail giants (particularly in Pakistan such as Khaadi, Outfitters, Sapphire, Nishat, Gul Ahmed, etc.).

Evaluate this enterprise retail profile:
- Retail Brand: ${brandName || 'Emerging Market Retailer'}
- Number of Outlets: ${storeCount || '10+'}
- Apparel / Merchandise Category: ${category || 'Contemporary Fashion & Pret'}
- Estimated Current Return / Fitting Queue Rate: ${currentReturnRate || '18-25%'}
- Strategic Priority: ${primaryGoal || 'Omnichannel Conversion & Trial Experience'}
- Additional Context: ${specificNotes || 'Standard mall flagship deployment'}

Deliver a high-reasoning, data-backed strategic assessment formatted strictly as a single JSON object with the following schema:
{
  "readinessScore": number (1 to 100),
  "readinessTier": string ("High Priority Rollout" | "Pilot Ready" | "Foundation Phase"),
  "recommendedStack": [
    {
      "solution": string,
      "priority": "Phase 1 (Immediate)" | "Phase 2 (6 Months)" | "Phase 3 (Scale)",
      "rationale": string
    }
  ],
  "projectedMetrics": {
    "returnReductionPercent": string (e.g. "32% - 41%"),
    "fittingRoomDwellReduction": string (e.g. "45% faster throughput"),
    "basketSizeIncrease": string (e.g. "+22% average order value"),
    "estimatedAnnualImpactUSD": string (e.g. "$140,000 - $320,000 across pilot stores")
  },
  "deploymentRoadmap": [
    {
      "stage": string,
      "duration": string,
      "keyMilestones": string[]
    }
  ],
  "localizedConsiderations": {
    "hardwareLogistics": string,
    "storeStaffTraining": string,
    "posIntegration": string
  },
  "executiveSummary": string
}
`;

    if (process.env.GEMINI_API_KEY && process.env.GEMINI_API_KEY !== 'MY_GEMINI_API_KEY') {
      try {
        const response = await ai.models.generateContent({
          model: 'gemini-4-argon',
          contents: prompt,
          config: {
            thinkingConfig: {
              thinkingLevel: ThinkingLevel.HIGH,
            },
            responseMimeType: 'application/json',
          },
        });

        const textOutput = response.text;
        if (textOutput) {
          const parsed = JSON.parse(textOutput);
          return res.json({ success: true, data: parsed, engine: 'gemini-4-argon (ThinkingLevel.HIGH)' });
        }
      } catch (geminiError: any) {
        console.warn('Gemini 4 Argon call failed, falling back to expert strategic matrix:', geminiError?.message);
      }
    }

    // High-quality deterministic enterprise response if API key is not yet set or during offline preview
    const parsedReturn = parseFloat(String(currentReturnRate)) || 22;
    const storeNum = parseInt(String(storeCount)) || 12;
    const estimatedSaved = Math.round(storeNum * 14500);

    const fallbackResponse = {
      readinessScore: 89,
      readinessTier: 'Pilot Ready' as const,
      recommendedStack: [
        {
          solution: 'AI Smart Mirrors (Dual Fitting Hubs)',
          priority: 'Phase 1 (Immediate)' as const,
          rationale: `Perfect fit for ${brandName || 'retailer'}'s ${category || 'fashion'} lines. Eliminates fitting room bottle-necking while driving cross-sell accessories.`,
        },
        {
          solution: 'Virtual Fitting Room Kiosks & Mobile AR',
          priority: 'Phase 1 (Immediate)' as const,
          rationale: 'Enables hyper-accurate Pakistani size mapping (lawn, pret & western sizing), reducing return rates drastically.',
        },
        {
          solution: 'Automated Computer Vision Footfall & Dwell Analytics',
          priority: 'Phase 2 (6 Months)' as const,
          rationale: 'Real-time anonymized heatmap tracking across store departments for merchandising optimization.',
        },
      ],
      projectedMetrics: {
        returnReductionPercent: `${Math.round(parsedReturn * 0.42)}% - ${Math.round(parsedReturn * 0.55)}%`,
        fittingRoomDwellReduction: '40% shorter queue wait times',
        basketSizeIncrease: '+24% units per transaction via AI styling',
        estimatedAnnualImpactUSD: `$${estimatedSaved.toLocaleString()} - $${(estimatedSaved * 2).toLocaleString()} annual value`,
      },
      deploymentRoadmap: [
        {
          stage: 'Pilot Curation & Hardware Sourcing',
          duration: 'Weeks 1 - 3',
          keyMilestones: [
            'Shipment of pre-certified European smart mirror displays with zero import tariff hassles handled by FlyWy',
            'Cloud tenant spin-up with local edge latency (<25ms in Pakistan)',
            'Brand garment 3D catalog digitizing (first 50 SKUs)',
          ],
        },
        {
          stage: 'In-Store Pilot Deployment',
          duration: 'Weeks 4 - 6',
          keyMilestones: [
            'Physical installation in top 2 flagship outlets (Dolmen Mall / Emporium Mall)',
            'Staff styling concierge training & customer onboarding',
            'A/B testing fitting room trial conversion vs standard cabins',
          ],
        },
        {
          stage: 'Enterprise Scale & Nationwide Rollout',
          duration: 'Months 2 - 6',
          keyMilestones: [
            'Full POS and ERP integration (Candela, Microsoft Dynamics, SAP)',
            'Expanding to 15+ branches with dedicated FlyWy 24/7 SLA support',
            'Executive analytics dashboard handover',
          ],
        },
      ],
      localizedConsiderations: {
        hardwareLogistics: 'FlyWy Bridge handles all customs clearance, voltage calibration (220V), and shock-proof commercial casing for local stores.',
        storeStaffTraining: 'Bilingual (Urdu & English) interactive guidebooks and on-ground concierge training for store associates.',
        posIntegration: 'Direct webhook connectivity with Candela Retail Software, SAP Retail, and custom local ERPs.',
      },
      executiveSummary: `Based on ${brandName || 'your brand'}'s footprint of ${storeCount || '10+'} stores, deploying FlyWy Bridge's curated European AI Smart Mirrors and Virtual Fitting solution will immediately transform trial engagement into closed retail sales, capturing an estimated $${estimatedSaved.toLocaleString()}+ in saved returns and basket upsells in Year 1.`,
    };

    return res.json({ success: true, data: fallbackResponse, engine: 'FlyWy Strategic Rules Engine' });
  } catch (error: any) {
    console.error('Advisor error:', error);
    res.status(500).json({ error: 'Failed to generate assessment', details: error?.message });
  }
});

// Endpoint: Submit inquiry
app.post('/api/inquiries', (req: Request, res: Response) => {
  const { name, email, organization, partnerType, solutionInterest, storeCount, message } = req.body;

  if (!name || !email) {
    return res.status(400).json({ error: 'Name and business email are required' });
  }

  const newInquiry: Inquiry = {
    id: `INQ-${Math.floor(1000 + Math.random() * 9000)}`,
    name,
    email,
    organization: organization || 'Undisclosed Firm',
    partnerType: partnerType || 'retailer',
    solutionInterest: solutionInterest || 'Full Retail AI Suite',
    storeCount: storeCount || '',
    message: message || '',
    createdAt: new Date().toISOString(),
  };

  inquiries.unshift(newInquiry);
  return res.json({
    success: true,
    inquiryId: newInquiry.id,
    message: 'Thank you for reaching out to FlyWy Bridge. Our enterprise team will respond within 24 hours.',
    contactEmail: 'flywybridge@gmail.com',
  });
});

// Endpoint: List recent partner inquiries (for demo/admin visibility)
app.get('/api/inquiries', (_req: Request, res: Response) => {
  res.json({ inquiries });
});

// Setup Vite middleware in dev or static files in production
async function startServer() {
  const isProd = process.env.NODE_ENV === 'production';

  if (!isProd) {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (_req: Request, res: Response) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, () => {
    console.log(`FlyWy Bridge Server running at http://localhost:${PORT}`);
  });
}

startServer();
