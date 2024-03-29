/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import CustomButton from "../../components/CustomButton";
import HomeImage from "../../assets/heroanimationtransparentbck-2.gif";
import NFTImg from "../../assets/nft.svg";
import CollectionImg from "../../assets/collection.svg";
import WalletImg from "../../assets/wallet.svg";
import SaleImg from "../../assets/sale.svg";
import Aurora from "../../assets/aurora.svg";
import Near from "../../assets/near.svg";
import Solidity from "../../assets/solidity1.png";
import Ethers from "../../assets/ethers.svg";
import Ethereum from "../../assets/ethereum.png";
import Pinata from "../../assets/pinata.svg";
import Ipfs from "../../assets/ipfs.svg";
import Reactjs from "../../assets/react.svg";
import Metamask from "../../assets/metamask.svg";
import Mui from "../../assets/mui.svg";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Avatar from '@mui/material/Avatar';

import "./Home.css";

const item = (img, title, text) => {
  return (
    <div style={{ width: "22%", textAlign: "center", padding: "0px 32px" }}>
      <img
        width={48}
        src={img}
        alt="Image"
        // style={{objectFit: "cover", borderRadius: 8, border: "1px #e0e0e0 solid"}}
        loading="lazy"
      />
      <div style={{ fontWeight: 700, padding: "8px 0px" }}>{title}</div>
      <div style={{ color: "#606060" }}>{text}</div>
    </div>
  );
};

const imgComp = (Img, alt, height = 50, color = "black", url) => (
  <a href={url} target="_blank" className="logo">
    <img
      height={height}
      src={Img}
      alt={alt}
      style={{ color: color }}
      loading="lazy"
    />
  </a>
);

export default function Home() {
  return (
    <>
    {/* <Avatar variant={"rounded"} alt="The image" src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/229777465/original/d7c051dac258cb35a21e2bccbed23c82a301f40d/design-a-nft-and-crypto-banner-for-youtube-twitter-header.jpg" style={{
       width: "100%",
        height: "200",
    }} /> */}
    <Grid
      container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: 3,
        marginTop: 6,
      }}
    >
      <Grid
        sx={{
          width: "80%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          paddingTop: 0,
        }}
      >
        <div style={{ display: "inline-flex", alignItems: "center" }}>
          <div style={{ width: "50%", padding: "0px 48px" }}>
            <h1
              style={{
                fontSize: 40,
                fontWeight: 700,
                marginBottom: 32,
                lineHeight: 1.2,
              }}
            >
              Discover Digital Art & Collect Nfts
            </h1>
            <h2 style={{ marginBottom: 48 }}>
              SuperNFTs created with NONAME . Collect, Buy And Sell Art From More Than 20k Nft Artists.
            </h2>
            <CustomButton
              variant="contained"
              sx={{ padding: "8px 48px" }}
              component={Link}
              to="/explore"
            >
              Explore
            </CustomButton>
          </div>
          <div style={{ width: "50%", paddingLeft: 48 }}>
            <img
              width={500}
              src={HomeImage}
              alt="Collection Image"
              style={{
                objectFit: "cover",
                borderRadius: 8,
              }}
              loading="lazy"
            />
          </div>
        </div>

        {/* Trending */}

        <div style={{ paddingTop: 144 }}>
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: 48,
            }}
          >
            <h2 style={{ fontWeight: 700 }}>Trending By Collection</h2>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: 45,
            }}
          >
            <Grid container spacing={5} justifyContent="center">
              <Grid item md={3} justifyContent={'center'}  >
                <Card sx={{ maxWidth: 500 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="100%"
                      image="https://i.seadn.io/s/raw/files/3ae33d267374e93cee3c9bd84d113f7f.png?auto=format&dpr=1&w=1000"
                      alt="green iguana"
                    />
                  </CardActionArea>
                </Card>
              </Grid>
              <Grid item md={3}>
                <Card sx={{ maxWidth: 500 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="100%"
                      image="https://i.seadn.io/s/raw/files/0042a0efe9cf1640e40b8d8ca27ee0da.gif?auto=format&dpr=1&w=1000"
                      alt="Collecttibles"
                    />
                  </CardActionArea>
                </Card>
              </Grid>
              <Grid item md={3}>
                <Card sx={{ maxWidth: 500 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="100%"
                      image="https://i.seadn.io/gcs/files/23e3f10021ea8a0e0793543bf39433e8.png?auto=format&dpr=1&w=1000"
                      alt="Domain Names"
                    />
                  </CardActionArea>
                </Card>
              </Grid>
            </Grid>
          </div>
        </div>

        <div style={{ paddingTop: 144 }}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <h2 style={{ fontWeight: 700, marginBottom: 64 }}>
              Create and sell your NFTs 
            </h2>
          </div>
          <div
            style={{
              display: "inline-flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              variant:"contained"
            }}
          >
            {item(
              WalletImg,
              "Set up your wallet",
              "Once you’ve set up your wallet of choice, connect it to localhost by clicking the wallet icon in the top right corner."
            )}
            {item(
              CollectionImg,
              "Create your collection",
              "Click My Collections and set up your collection. Add social links, a description, profile & banner images, and set a secondary sales fee."
            )}
            {item(
              NFTImg,
              "Add your NFTs",
              "Upload your work (image, video, audio, or 3D art), add a title and description, and customize your NFTs with properties, stats, and unlockable content."
            )}
            {item(
              SaleImg,
              "List them for sale",
              "Choose between auctions, fixed-price listings, and declining-price listings. You choose how you want to sell your NFTs, and we help you sell them!"
            )}
          </div>
        </div>

        <div style={{ paddingTop: 144 }}>
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: 48,
            }}
          >
            <h2 style={{ fontWeight: 700 }}>Browser By Category</h2>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: 45,
            }}
          >
            <Grid container spacing={5} justifyContent="center">
              <Grid item md={3} justifyContent={'center'}  >
                <Card sx={{ maxWidth: 500 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="200"
                      image="https://testnets.opensea.io/static/images/categories/art.png"
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Art
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
              <Grid item md={3}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="200"
                      image="https://testnets.opensea.io/static/images/categories/collectibles.png"
                      alt="Collecttibles"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Collectibles
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
              <Grid item md={3}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="200"
                      image="https://testnets.opensea.io/static/images/categories/domain-names.png"
                      alt="Domain Names"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Domain Names
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            </Grid>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: 45,
            }}
          >
            <Grid container spacing={5} justifyContent="center">
              <Grid item md={3} justifyContent={'center'}  >
                <Card sx={{ maxWidth: 500 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="200"
                      image="https://testnets.opensea.io/static/images/categories/trading-cards.png"
                      alt="green iguana"
                    />
                    <CardContent style={{textAlign: "center"}}>
                      <Typography gutterBottom variant="h5" component="div">
                        Trading Cards
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
              <Grid item md={3}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="200"
                      image="https://testnets.opensea.io/static/images/categories/utility.png"
                      alt="Collecttibles"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Utility
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
              <Grid item md={3}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="200"
                      image="https://testnets.opensea.io/static/images/categories/virtual-worlds.png"
                      alt="Domain Names"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Virtual Worlds
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            </Grid>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: 45,
            }}
          >
            <Grid container spacing={5} justifyContent="center">
              <Grid item md={3} justifyContent={'center'}  >
                <Card sx={{ maxWidth: 500 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="200"
                      image="https://testnets.opensea.io/static/images/categories/music.png"
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Music
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
              <Grid item md={3}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="200"
                      image="https://testnets.opensea.io/static/images/categories/photography-category.png"
                      alt="Collecttibles"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Photography
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
              <Grid item md={3}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="200"
                      image="https://testnets.opensea.io/static/images/categories/sports.png"
                      alt="Sports"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Sports
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            </Grid>
          </div>
        </div>
        
      </Grid>
    </Grid>
    </>
  );
}
