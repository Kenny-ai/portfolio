import { ImageResponse } from 'next/og';
import { profile } from '@/lib/portfolio';

export const alt = 'Kenny Soyoye — Software Developer. A little creative. A lot of code.';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', background: '#f4f2eb', color: '#23231f', padding: '56px 68px', fontFamily: 'sans-serif' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: 22 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}><div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 52, height: 52, background: '#23231f', color: '#f4f2eb', borderRadius: 10, fontSize: 25 }}>{'</>'}</div><span>{profile.name}</span></div>
        <span style={{ fontSize: 17, letterSpacing: 3 }}>SOFTWARE DEVELOPER</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', fontSize: 89, letterSpacing: -5, lineHeight: 1.08 }}><span>A little creative.</span><div style={{ display: 'flex' }}><span>A lot of code</span><span style={{ color: '#ee5b31' }}>.</span></div></div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #d9d7ce', paddingTop: 25 }}><span style={{ fontSize: 23 }}>Web. Mobile. Backend systems.</span><svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="#ee5b31" strokeWidth="2" strokeLinecap="round"><path d="M12 3v18M4.2 7.5l15.6 9M4.2 16.5l15.6-9" /></svg></div>
    </div>,
    size,
  );
}
