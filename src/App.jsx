import React, { useState } from 'react';

function Calculator() {
    const [input, setInput] = useState('');
    const [result, setResult] = useState(0);

    const handleClick = (value) => {
        if (value === '=') {
            if ((/\d$/.test(input))) {
                setResult(eval(input));
            }

            setResult('Error');

        } else if (value === 'C') {
            setInput('');
            setResult(0);
        } else {
            setInput(prev => {
                console.log(prev + value);
                return (prev + value)
            });
        }
    };

    const buttons = [
        '7', '8', '9', '/',
        '4', '5', '6', '*',
        '1', '2', '3', '-',
        '0', 'C', '=', '+'
    ];

    return (
        <div style={{
            maxWidth: '300px',
            margin: '50px auto',
            textAlign: 'center'
        }}>
            <h2>Калькулятор</h2>
            <div style={{
                padding: '10px',
                background: '#f0f0f0',
                borderRadius: '5px',
                marginBottom: '10px'
            }}>
                <div>{input || '0'}</div>
                <div style={{ fontWeight: 'bold' }}>= {result}</div>
            </div>
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: '5px'
            }}>
                {buttons.map((btn) => (
                    <button
                        key={btn}
                        onClick={() => handleClick(btn)}
                        style={{
                            padding: '10px',
                            fontSize: '18px',
                            borderRadius: '5px',
                            border: 'none',
                            background: '#e0e0e0',
                            cursor: 'pointer'
                        }}
                    >
                        {btn}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default Calculator;