const Footer = () => {
    return (
        <footer style={{ borderTop: '1px solid var(--border-color)', padding: '2rem 0', background: 'var(--bg-color)', textAlign: 'center' }}>
            <div className="container">
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                    &copy; {new Date().getFullYear()} Priyanshu Singh. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
