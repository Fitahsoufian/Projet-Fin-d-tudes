import React from 'react'

function BannerName({link}) {
  const currency = "$";
  return (
    <div className="bannerContent">
      <h1>𝐖𝐞𝐥𝐜𝐨𝐦𝐞 𝐓𝐨 𝐒𝐮𝐩𝐩𝐞𝐫𝐀𝐜𝐜</h1>
      <h3>BEHIND EVERY GOOD BUSINESS , A GREAT ACCOUNTER</h3>
      <p>
      𝑺𝒖𝒑𝒆𝒓 𝑨𝒄𝒄 𝒅𝒆𝒗𝒆𝒍𝒐𝒑𝒔 𝒔𝒐𝒇𝒕𝒘𝒂𝒓𝒆 𝒕𝒉𝒂𝒕 𝒔𝒖𝒑𝒑𝒐𝒓𝒕𝒔 𝒂𝒄𝒄𝒐𝒖𝒏𝒕𝒂𝒏𝒕𝒔 𝒊𝒏 𝒕𝒉𝒆𝒊𝒓 𝒅𝒊𝒈𝒊𝒕𝒂𝒍𝒊𝒛𝒂𝒕𝒊𝒐𝒏. 𝑷𝒓𝒐𝒅𝒖𝒄𝒕𝒊𝒗𝒊𝒕𝒚, 𝒄𝒖𝒔𝒕𝒐𝒎𝒆𝒓 𝒆𝒙𝒑𝒆𝒓𝒊𝒆𝒏𝒄𝒆, 𝒈𝒓𝒐𝒘𝒕𝒉, 𝒂𝒍𝒍 𝒊𝒏 𝒐𝒏𝒆 𝒑𝒍𝒂𝒄𝒆.
      </p>
      <a href={link}>Read More ...</a>
    </div>
    
  );
}

export default BannerName;