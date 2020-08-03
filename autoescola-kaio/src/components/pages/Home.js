import React from "react";
// import PropTypes from 'prop-types';
import { FaCar, FaKey, FaMapMarkedAlt, FaAccessibleIcon } from "react-icons/fa";

import Hero from "components/molecules/Hero";
import Heading from "components/atoms/Heading";
import Button from "components/atoms/Button";
import Grid from "components/atoms/Grid";
import Feature from "components/atoms/Feature";
import Section from "components/molecules/Section";
import ProductGrid from "components/organisms/ProductGrid";
import Footer from "components/organisms/Footer";

import HeroImage from "assets/bg-car.jpg";
import AboutVideo from "assets/about.mp4";
import ProductImage01 from "assets/product-1.jpg";
import ProductImage02 from "assets/product-2.jpg";
import ProductImage03 from "assets/product-3.jpg";
import ProductImage04 from "assets/product-4.jpg";
import ProductImage05 from "assets/product-5.jpg";

const products = [
  {
    id: 1,
    title: "1ª Habilitação Carro e Moto",
    summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image: ProductImage01,
  },
  {
    id: 2,
    title: "1ª Habilitação Carro",
    summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image: ProductImage02,
  },
  {
    id: 3,
    title: "1ª Habilitação Moto",
    summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image: ProductImage03,
  },
  {
    id: 4,
    title: "Mudança de Categoria Caminhã",
    summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image: ProductImage04,
  },
  {
    id: 5,
    title: "Aulas Avulsas",
    summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image: ProductImage05,
  },
];

const Home = () => (
  <>
    <Hero image={HeroImage}>
      <Heading>
        <h1>
          Ganhe sua <strong>liberdade</strong>
          <br /> para ir e vir
        </h1>
      </Heading>
      <ul>
        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
      </ul>

      <Button variant="outlined" color="primary">
        Matricule-se agora
      </Button>
    </Hero>
    <Section>
      <Grid sm={2} md={4}>
        <Feature icon={<FaCar />} title="Maior e melhor frota">
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        </Feature>
        <Feature icon={<FaKey />} title="Habilitação mais rápida">
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        </Feature>
        <Feature icon={<FaMapMarkedAlt />} title="Excelente localização">
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        </Feature>
        <Feature icon={<FaAccessibleIcon />} title="Acessibilidade">
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        </Feature>
      </Grid>
    </Section>
    <Section inverse>
      <Heading>
        <h2>Conheça nossos serviços</h2>
        <ProductGrid products={products} />
      </Heading>
    </Section>
    <Section>
      <Grid md={2}>
        <div>
          <Heading>
            <h2>Auto escola Kaio</h2>
          </Heading>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia
            inventore cum provident iure, repellat sequi possimus, repudiandae
            facilis consequuntur, dicta deleniti nobis beatae labore ipsum
            voluptatem in iste eius ex.
          </p>
          <div>
            <Button color="primary">Saiba mais</Button>
          </div>
        </div>
        <div>
          <video src={AboutVideo} width="100%" autoPlay loop></video>
        </div>
      </Grid>
    </Section>
    <Section inverse>
      <Heading>
        <h2>Dúvidas Recorrentes</h2>
      </Heading>
    </Section>
    <Footer />
  </>
);

// Home.defaultProps = {};

// Home.propTypes = {};

export default Home;
