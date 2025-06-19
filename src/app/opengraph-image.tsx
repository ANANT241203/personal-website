import { ImageResponse } from 'next/og';

export const dynamic = 'force-static';

export const alt = 'Anant Aggarwal - AI Engineer & Data Scientist';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0f0f23',
          backgroundImage: 'linear-gradient(135deg, #1e1e3f 0%, #0f0f23 50%, #1a1a2e 100%)',
          fontSize: 32,
          fontWeight: 600,
        }}
      >
        {/* Background decorative elements */}
        <div
          style={{
            position: 'absolute',
            top: '20%',
            left: '20%',
            width: '300px',
            height: '300px',
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)',
            borderRadius: '50%',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '20%',
            right: '20%',
            width: '250px',
            height: '250px',
            background: 'radial-gradient(circle, rgba(147, 51, 234, 0.1) 0%, transparent 70%)',
            borderRadius: '50%',
          }}
        />
        
        {/* Main content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            zIndex: 10,
            padding: '40px',
          }}
        >
          {/* Name */}
          <div
            style={{
              fontSize: '72px',
              fontWeight: 'bold',
              background: 'linear-gradient(135deg, #60a5fa 0%, #a855f7 100%)',
              backgroundClip: 'text',
              color: 'transparent',
              marginBottom: '20px',
              letterSpacing: '-2px',
            }}
          >
            ANANT AGGARWAL
          </div>
          
          {/* Title */}
          <div
            style={{
              fontSize: '36px',
              fontWeight: '600',
              color: '#e5e7eb',
              marginBottom: '30px',
              background: 'linear-gradient(135deg, #ffffff 0%, #d1d5db 100%)',
              backgroundClip: 'text',
            }}
          >
            AI Engineer & Data Scientist
          </div>
          
          {/* Credentials */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              gap: '30px',
              fontSize: '24px',
              color: '#9ca3af',
              marginBottom: '40px',
            }}
          >
            <div style={{ color: '#60a5fa' }}>MS Data Science @ UPenn</div>
            <div style={{ color: '#a855f7' }}>Published Researcher</div>
            <div style={{ color: '#ec4899' }}>7+ Papers</div>
          </div>
          
          {/* Tech stack */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              gap: '20px',
              fontSize: '18px',
              color: '#6b7280',
            }}
          >
            <div style={{ 
              padding: '8px 16px', 
              backgroundColor: 'rgba(59, 130, 246, 0.1)', 
              border: '1px solid rgba(59, 130, 246, 0.3)',
              borderRadius: '20px',
              color: '#93c5fd'
            }}>
              TensorFlow
            </div>
            <div style={{ 
              padding: '8px 16px', 
              backgroundColor: 'rgba(147, 51, 234, 0.1)', 
              border: '1px solid rgba(147, 51, 234, 0.3)',
              borderRadius: '20px',
              color: '#c4b5fd'
            }}>
              PyTorch
            </div>
            <div style={{ 
              padding: '8px 16px', 
              backgroundColor: 'rgba(236, 72, 153, 0.1)', 
              border: '1px solid rgba(236, 72, 153, 0.3)',
              borderRadius: '20px',
              color: '#f9a8d4'
            }}>
              React
            </div>
            <div style={{ 
              padding: '8px 16px', 
              backgroundColor: 'rgba(34, 197, 94, 0.1)', 
              border: '1px solid rgba(34, 197, 94, 0.3)',
              borderRadius: '20px',
              color: '#86efac'
            }}>
              Medical AI
            </div>
          </div>
        </div>
        
        {/* Website URL */}
        <div
          style={{
            position: 'absolute',
            bottom: '30px',
            right: '40px',
            fontSize: '20px',
            color: '#6b7280',
          }}
        >
          anant.upenn.domains
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
