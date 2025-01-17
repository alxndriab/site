import teamStyles from '../styles/Team.module.css';

const Team = () => {
    return (
        <section className={teamStyles.background}>
            <br id="team" />
            <div className={teamStyles.title}>our team</div>
            <div className={teamStyles.teamShowcase}>
                <div className={teamStyles.member}>
                    <img src="/members/warren.PNG" className={teamStyles.memberImage} />
                    <h1 className={teamStyles.text}>warren</h1>
                    <h1 className={teamStyles.subtext}>Organizer</h1>
                </div>
                <div className={teamStyles.member}>
                    <img src="/members/fahim.png" className={teamStyles.memberImage} />
                    <h1 className={teamStyles.text}>fahim</h1>
                    <h1 className={teamStyles.subtext}>Organizer</h1>
                </div>
                <div className={teamStyles.member}>
                    <img src="/members/asa.png" className={teamStyles.memberImage} />
                    <h1 className={teamStyles.text}>asa</h1>
                    <h1 className={teamStyles.subtext}>Organizer</h1>
                </div>
                <div className={teamStyles.member}>
                    <img src="/members/alex.PNG" className={teamStyles.memberImage} />
                    <h1 className={teamStyles.text}>alexandria</h1>
                    <h1 className={teamStyles.subtext}>Organizer</h1>
                </div>
                <div className={teamStyles.member}>
                    <img src="/members/jake.png" className={teamStyles.memberImage} />
                    <h1 className={teamStyles.text}>Jake</h1>
                    <h1 className={teamStyles.subtext}>twitch.tv/JakeJack</h1>
                </div>
            </div>
            <div className={teamStyles.buttonDiv}>
                <span className={teamStyles.subtext}>Interested in being a mentor/judge?</span>
                <br></br>
                <a href="mailto:warren@midnighthacks.tech?subject=Mentor/Judge%20Interest">
                    <button className={teamStyles.btn}>
                        Apply here!
                    </button>
                </a>
            </div>
        </section>
    );
}

export default Team;