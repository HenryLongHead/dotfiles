import PanelButton from '../PanelButton.js';
import FontIcon from '../../misc/FontIcon.js';
import { distroIcon } from '../../variables.js';

export default () => PanelButton({
    className: 'applauncher',
    connections: [[ags.App, (btn, win, visible) => {
        btn.toggleClassName('active', win === 'applauncher' && visible);
    }]],
    onClicked: () => ags.App.toggleWindow('applauncher'),
    content: FontIcon(distroIcon),
});
