(function() {
    // 1. Wipe the page and set up the cyber environment
    document.documentElement.innerHTML = '';
    const style = document.createElement('style');
    style.innerHTML = `
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap');
        
        body {
            background-color: #050505;
            color: #ffffff;
            font-family: 'Orbitron', sans-serif;
            margin: 0;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 100vh;
            overflow: hidden;
            text-align: center;
            background-image: radial-gradient(circle at center, #1a0505 0%, #050505 100%);
        }

        .container {
            border: 2px solid #ff0000;
            padding: 50px;
            background: rgba(0, 0, 0, 0.8);
            box-shadow: 0 0 50px rgba(255, 0, 0, 0.2);
            border-radius: 10px;
            max-width: 800px;
            position: relative;
        }

        h1 {
            color: #ff0000;
            font-size: 5rem;
            margin: 0;
            text-transform: uppercase;
            letter-spacing: 15px;
            text-shadow: 0 0 20px #ff0000, 0 0 40px #800000;
            animation: pulse 2s infinite;
        }

        h2 {
            font-size: 1.5rem;
            color: #ff4d4d;
            margin-top: 20px;
            letter-spacing: 2px;
        }

        .status {
            background: #ff0000;
            color: #000;
            padding: 5px 15px;
            font-weight: bold;
            display: inline-block;
            margin: 20px 0;
            border-radius: 3px;
        }

        p {
            color: #cccccc;
            line-height: 1.6;
            margin: 20px 0;
        }

        .contact-box {
            margin-top: 40px;
            border-top: 1px solid #333;
            padding-top: 20px;
        }

        .btn {
            display: inline-block;
            padding: 12px 30px;
            border: 1px solid #ff0000;
            color: #ff0000;
            text-decoration: none;
            transition: 0.3s;
            font-weight: bold;
            margin-top: 10px;
        }

        .btn:hover {
            background: #ff0000;
            color: #000;
            box-shadow: 0 0 20px #ff0000;
        }

        @keyframes pulse {
            0% { transform: scale(1); text-shadow: 0 0 20px #ff0000; }
            50% { transform: scale(1.02); text-shadow: 0 0 40px #ff0000, 0 0 60px #ff0000; }
            100% { transform: scale(1); text-shadow: 0 0 20px #ff0000; }
        }

        /* Matrix-like decorative background lines */
        .glitch-overlay {
            position: fixed;
            top: 0; left: 0; width: 100%; height: 100%;
            background: repeating-linear-gradient(0deg, rgba(255, 0, 0, 0.03) 0px, rgba(255, 0, 0, 0.03) 1px, transparent 2px, transparent 5px);
            pointer-events: none;
        }
    `;
    document.head.appendChild(style);

    // 2. Create the UI
    const overlay = document.createElement('div');
    overlay.className = 'glitch-overlay';
    document.body.appendChild(overlay);

    const container = document.createElement('div');
    container.className = 'container';
    container.innerHTML = `
        <h1>HACKED</h1>
        <h2>BLACK HOLE INITIATIVE IS VULNERABLE</h2>
        <div class="status">SYSTEM SECURITY FAILURE</div>
        <p>
            Your system was found to be vulnerable to <b>Reflected XSS</b>.<br>
            This is an ethical security demonstration performed by <b>Team Hack4Bug</b>.<br>
            No data was harmed during this test.
        </p>
        <div class="contact-box">
            <p>To secure this vulnerability, please contact our researchers:</p>
            <a href="mailto:contact@teamhack4bug.net" class="btn">CONTACT RESEARCHER</a>
        </div>
        <div style="margin-top: 20px; font-size: 0.7rem; color: #444;">
            &copy; 2026 Team Hack4Bug Security Research
        </div>
    `;
    document.body.appendChild(container);

    console.log("%c[!] TARGET HACKED: Vulnerability Confirmed", "color: red; font-size: 24px; font-weight: bold;");
})();
