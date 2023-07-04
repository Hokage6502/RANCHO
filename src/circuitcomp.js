import React, { useState } from 'react';
import '@wokwi/elements';
import Draggable from 'react-draggable';


// Electronic component components
const Resistor = ({ value }) => <div>Resistor: <wokwi-resistor value={value}></wokwi-resistor></div>;
const Capacitor = ({ value }) => <div>Capacitor: {value}</div>;
const LED = ({ color }) => <div>LED: <wokwi-led color={color} lightcolor={color}></wokwi-led></div>;

function CircuitSimulator() {
    const [circuitComponents, setCircuitComponents] = useState([]);
    const [wires, setWires] = useState([]);

  const addComponent = (component) => {
    setCircuitComponents([...circuitComponents, component]);
  };

  const connectComponents = (startId, endId) => {
    const newWire = {
      startId,
      endId,
    };
    setWires([...wires, newWire]);
  };

  return (
    <div>
      <h1>Rancho Circuit Simulator</h1>
      <>
      <button onClick={() => addComponent(<Resistor value="1" />)}>Add Resistor</button>
      <button onClick={() => addComponent(<Capacitor value="100μF" />)}>Add Capacitor</button>
      <button onClick={() => addComponent(<LED color="blue" />)}>Add Blue LED</button>
<button onClick={() => addComponent(<LED color="red" />)}>Add Red LED</button>
      <h3>Circuit Components:</h3>
      <div className='w-96 h-96 bg-black'>

      </div>
      <div className="bg-sky-500/[.06] ...">
      <div className='w-full h-96 bg-slate-200'>
      {circuitComponents.map((component, index) => (
         <Draggable key={index}>
            <div
            style={{ position: 'absolute', zIndex: 100 }}
            onMouseDown={() => connectComponents(index, index + 1)}
          >
            {component}
          </div>
           </Draggable>
      ))}
      </div>
      </div>
      <svg style={{ position: 'absolute', zIndex: 1 }}>
        {wires.map((wire, index) => (
          <line
            key={index}
            x1={wire.startId * 100 + 50}
            y1={100}
            x2={wire.endId * 100 + 50}
            y2={100}
            stroke="black"
          />
        ))}
      </svg>
      </>
    </div>
  );
}

export default CircuitSimulator;





