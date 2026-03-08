import sunBlack from '../assets/sun_black.png';
import moonWhite from '../assets/moon_white.png';
import '../css/dark-mode-toggle.css';

export default function DarkModeToggle() {
    return (
        <label className="dark-mode-switch">
            <input type="checkbox" id="dark-mode-toggle" />
            <span className="slider">
                <img id="dark-mode-icon" src={sunBlack} data-light={sunBlack} data-dark={moonWhite} alt="mode icon" />
            </span>
        </label>
    );
}
