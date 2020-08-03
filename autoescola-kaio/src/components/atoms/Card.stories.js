import React from "react";

import Card, { CardBody, CardMedia } from "./Card";
import Section from "components/molecules/Section";
import Heading from "components/atoms/Heading";
import Button from "components/atoms/Button";

import PlaceholderImage from "stories/assets/card-placeholder.jpg";

export default {
  title: "Components|Atoms/Card",
  component: Card,
  subcomponents: { CardBody, CardMedia },
};

export const usage = () => (
  <Section inverse>
    <CardBody>
      <Heading>
        <h6>Titulo</h6>
      </Heading>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <div>
        <Button color="primary" variant="link">
          Saiba mais
        </Button>
      </div>
    </CardBody>
  </Section>
);

export const withMedia = () => (
  <Section inverse>
    <CardMedia image={PlaceholderImage} />
    <CardBody>
      <Heading>
        <h6>Titulo</h6>
      </Heading>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <div>
        <Button color="primary" variant="link">
          Saiba mais
        </Button>
      </div>
    </CardBody>
  </Section>
);
