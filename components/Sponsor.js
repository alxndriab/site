import sponsorStyles from '../styles/Sponsor.module.css';

const Sponsor = () => {
    return (
        <section className={sponsorStyles.background} id="sponsors">
            <br /> <br />
            <span className={sponsorStyles.title}>sponsors</span>
            <div className={sponsorStyles.sponsorList}>
                <a href="https://artofproblemsolving.com/" target="_blank">
                    <img src="/sponsors/aops.png" alt="the art of problem solving" className={sponsorStyles.sponsorLogo}/>
                </a>
                <a href="https://hackclub.com/bank/" target="_blank">
                    <img src="/sponsors/hack_club_bank.png" alt="the art of problem solving" className={sponsorStyles.sponsorLogo}/>
                </a>

            </div>
            <a href="mailto:warren@midnighthacks.tech?subject=Sponsorship%20Interest">
                <button className={sponsorStyles.btn}>
                    Sponsor us!
                </button>
            </a>
        </section>
    );
}

export default Sponsor;