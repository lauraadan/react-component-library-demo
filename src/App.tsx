import {
  Button,
  Card,
  Alert,
  Accordion,
} from "@lauraadan/react-component-library";

function App() {
  return (
    <div style={{ padding: 40, maxWidth: 900, margin: "0 auto" }}>
      <h1>Component Library Playground</h1>

      {/* Alerts */}
      <section style={{ marginBottom: 40 }}>
        <h2>Alerts</h2>

        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <Alert severity="success">
            Success alert from the component library
          </Alert>

          <Alert severity="error">Error alert from the component library</Alert>
        </div>
      </section>

      {/* Buttons */}
      <section style={{ marginBottom: 40 }}>
        <h2>Buttons</h2>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
          <Button variant="contained">Primary</Button>

          <Button variant="contained" color="secondary">
            Secondary
          </Button>

          <Button variant="contained" color="success">
            Success
          </Button>

          <Button variant="contained" color="error">
            Error
          </Button>

          <Button variant="outlined">Outlined</Button>
        </div>
      </section>

      {/* Card */}
      <section style={{ marginBottom: 40 }}>
        <h2>Card</h2>

        <Card
          title="Card title"
          image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
        />
      </section>

      {/* Accordion */}
      <section>
        <h2>Accordion</h2>

        <Accordion
          items={[
            {
              title: "Section 1",
              description: "Content 1",
            },
            {
              title: "Section 2",
              description: "Content 2",
            },
          ]}
        />
      </section>
    </div>
  );
}

export default App;
