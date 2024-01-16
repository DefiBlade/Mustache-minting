import "./Specs.scss";

import video from "../../assets/videos/Mustache5.mp4";

export const Specs = () => {
  return (
    <section className="specs contentWrapper">
      <div className="specs__content">
        <h1 className="section__title">THE SPECS</h1>
        <p className="section__desc">
          Each NFT Mustache is programmatically generated from dozens of traits
          including Mo’ styles, materials, colors and textures. Each Mo’ is
          super dope, paying homage to fantastically famous faces and hairy
          humans from history. But some Mo’s are just rarer than others. <br />
          <br />
          Each meticulously hand-quaffed Mo is stored as an ERC-721 token on the Ethereum blockchain and hosted on IPFS. Each Mo is priced at a super low 0.03 ETH.
          <br />
          <br />
          EVERY NFT mint comes with a free meme-able PNG that allows you to take YOUR on-chain, dynamically created, algorithmically unique, one-of-a-kind jpeg mustache and put it on- LITERALLY any MoFo out there. Your Bored Ape? Yes. Your sister?  Sure. Your Punk? Absopunkinglutely. You can even use your Mo to spruce up that sorry-ass Toadz knock off, you FOMO into like a degen.
        </p>
      </div>

      <div className="specs__picture">
        <video autoPlay loop muted>
          <source src={video} type="video/mp4" />
        </video>
      </div>
    </section>
  );
};

export default Specs;
