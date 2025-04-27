import React from "react";
import { useTranslation } from "react-i18next";
import { Container, Row, Col, Card, Badge } from "react-bootstrap";

const Home = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <>
      <h1>{t("welcome")}</h1>
      <p>{t("description")}</p>

      <button onClick={() => changeLanguage("en")}>English</button>
      <button onClick={() => changeLanguage("fr")}>Francais</button>

      <Container className="my-5">
        <Row>
          <Col md={{ span: 8, offset: 2 }}>
            <Card className="p-4 shadow-sm">
              <Card.Body>
                <h1 className="text-center mb-4">John Doe</h1>
                <h5 className="text-center text-muted mb-5">
                  Développeur Web Junior
                </h5>

                <section className="mb-4">
                  <h4>Compétences</h4>
                  <div>
                    <Badge pill bg="primary" className="me-2 mb-2">
                      HTML
                    </Badge>
                    <Badge pill bg="primary" className="me-2 mb-2">
                      CSS
                    </Badge>
                    <Badge pill bg="primary" className="me-2 mb-2">
                      JavaScript
                    </Badge>
                    <Badge pill bg="primary" className="me-2 mb-2">
                      Bootstrap
                    </Badge>
                    <Badge pill bg="primary" className="me-2 mb-2">
                      Python
                    </Badge>
                    <Badge pill bg="primary" className="me-2 mb-2">
                      Node.js
                    </Badge>
                    <Badge pill bg="primary" className="me-2 mb-2">
                      React.js
                    </Badge>
                  </div>
                </section>

                <section className="mb-4">
                  <h4>Formations</h4>
                  <ul>
                    <li>Formation Développeur Web - OpenClassrooms (2024)</li>
                    <li>
                      Autoformation continue via projets personnels et
                      documentation officielle
                    </li>
                  </ul>
                </section>

                <section className="mb-4">
                  <h4>Expériences Professionnelles</h4>
                  <ul>
                    <li>
                      <strong>Développeur Web Junior</strong> — Projets
                      personnels (2024 - aujourd'hui)
                      <ul>
                        <li>
                          Création de plusieurs sites vitrines en React.js et
                          Node.js.
                        </li>
                        <li>
                          Développement d'un petit CRM interne en Node.js et
                          React.
                        </li>
                      </ul>
                    </li>
                    <li className="mt-3">
                      <strong>Commercial (passé)</strong> — 5 ans d'expérience
                      <ul>
                        <li>
                          Développement de compétences en communication et
                          gestion de projets clients.
                        </li>
                      </ul>
                    </li>
                  </ul>
                </section>

                <section className="mb-4">
                  <h4>Projets Personnels</h4>
                  <ul>
                    <li>Mini site e-commerce de mugs (React.js / Node.js)</li>
                    <li>
                      Blog personnel codé en React avec une API Node/Express
                    </li>
                  </ul>
                </section>

                <section>
                  <h4>Contact</h4>
                  <p>Email : johndoe@email.com</p>
                  <p>Téléphone : 06 12 34 56 78</p>
                  <p>GitHub : github.com/johndoe</p>
                </section>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
