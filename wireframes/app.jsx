/* App — mounts the 4 wireframes in a DesignCanvas */
const { DesignCanvas, DCSection, DCArtboard } = window;

const App = () => (
  <DesignCanvas>
    <DCSection id="home" title="Novio Studio · Home" subtitle="4 directions de wireframes — clic sur un cadre pour ouvrir en plein écran.">
      <DCArtboard id="wf-a" label="A · Éditorial — magazine, serif géant, asymétrique" width={780} height={2900}>
        <WireframeA />
      </DCArtboard>
      <DCArtboard id="wf-b" label="B · Cinéma — dark mode, showreel plein écran, scroll-pin" width={780} height={2900}>
        <WireframeB />
      </DCArtboard>
      <DCArtboard id="wf-c" label="C · Index Brutaliste — mono, table, dense, ultra-clair" width={780} height={2900}>
        <WireframeC />
      </DCArtboard>
      <DCArtboard id="wf-d" label="D · Manifeste — cream/terracotta, ton signé, reçu" width={780} height={2900}>
        <WireframeD />
      </DCArtboard>
    </DCSection>
  </DesignCanvas>
);

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
