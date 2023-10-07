const WP = `/home/${ags.Utils.USER}/Pictures/Wallpapers/`;

const editScheme = (scheme, edit) => {
    const obj = {};
    Object.keys(scheme).forEach(color => obj[color] = edit(scheme[color]));
    return obj;
};

const gnome = {
    red: '#f66151',
    green: '#57e389',
    yellow: '#f6d32d',
    blue: '#62a0ea',
    magenta: '#c061cb',
    teal: '#5bc8aF',
    orange: '#ffa348',
};

const charm = {
    red: '#e67090',
    green: '#43c383',
    yellow: '#d8e77b',
    blue: '#51a4e7',
    magenta: '#9077e7',
    teal: '#51e6e6',
    orange: '#E79E64',
};

const nord = {
    red: '#BE616B',
    green: '#A3BD8D',
    yellow: '#EACB8B',
    blue: '#80A0C0',
    magenta: '#B38EAD',
    teal: '#8FBBBA',
    orange: '#BE616B',
};

const dark = {
    color_scheme: 'dark',
    bg_color: '#171717',
    fg_color: '#eeeeee',
    hover_fg: '#f1f1f1',
    ...charm,
};

const darkmine = {
    color_scheme: 'dark',
    bg_color: '#1C1C1C',
    fg_color: '#eeeeee',
    hover_fg: '#f1f1f1',
    ...nord,
};

const light = {
    color_scheme: 'light',
    bg_color: '#fffffa',
    fg_color: '#141414',
    hover_fg: '#0a0a0a',
    ...editScheme(gnome, c => `darken(${c}, 8%)`),
};

const misc = {
    wm_gaps: 22,
    radii: 9,
    spacing: 9,
    shadow: 'rgba(0, 0, 0, .6)',
    drop_shadow: true,
    transition: 200,
    screen_corners: true,
    bar_style: 'normal',
    layout: 'topbar',
    desktop_clock: 'center center',
};

const miscmine = {
    wm_gaps: 25,
    radii: 0,
    spacing: 10,
    shadow: 'rgba(0, 0, 0, .6)',
    drop_shadow: true,
    transition: 200,
    screen_corners: true,
    bar_style: 'normal',
    layout: 'topbar',
    desktop_clock: 'center center',
};

const colors = {
    wallpaper_fg: 'white',
    hypr_active_border: 'rgba(3f3f3fFF)',
    hypr_inactive_border: 'rgba(3f3f3fDD)',
    accent: '$blue',
    accent_fg: '#141414',
    widget_bg: '$fg_color',
    widget_opacity: 94,
    active_gradient: 'to right, $accent, lighten($accent, 6%)',
    border_color: '$fg_color',
    border_opacity: 97,
    border_width: 1,
};

const colorsmine = {
    wallpaper_fg: 'white',
    // hypr_active_border: 'rgba(80A0C0FF)',
    hypr_active_border: 'rgba(212121FF)',
    hypr_inactive_border: 'rgba(212121FF)',
    accent: '$blue',
    accent_fg: '#1C1C1C',
    widget_bg: '$fg_color',
    widget_opacity: 95,
    active_gradient: '$accent',
    border_color: '$accent',
    border_opacity: 100,
    border_width: 5,
};

// themes
const kitty_dark = {
    wallpaper: WP + 'hyprland_kitty.jpeg',
    name: 'kitty_dark',
    icon: '󰄛',
    ...darkmine,
    ...miscmine,
    ...colorsmine,
};

const kitty_light = {
    wallpaper: WP + 'kitty.jpeg',
    name: 'kitty_light',
    icon: '󰄛',
    ...light,
    ...misc,
    ...colors,
    widget_bg: '$accent',
    widget_opacity: 84,
};

const leaves = {
    ...darkmine,
    ...miscmine,
    ...colorsmine,
    name: 'leaves',
    icon: '󰌪',
    wallpaper: WP + 'leaves2.png',
    accent: '$green',
    // hypr_active_border: 'rgba(A3BD8DFF)',
    
};

const plant = {
    ...darkmine,
    ...miscmine,
    ...colorsmine,
    name: 'plant',
    icon: '󰌪',
    wallpaper: WP + 'plant2.png',
    accent: '$teal',
    // hypr_active_border: 'rgba(A3BD8DFF)',
    
};

const beach = {
    ...darkmine,
    ...miscmine,
    ...colorsmine,
    name: 'beach',
    icon: '󰂒',
    wallpaper: WP + 'beach.png',
    accent: '$teal',
    // hypr_active_border: 'rgba(A3BD8DFF)',
    
};

const mountain = {
	...darkmine,
    ...miscmine,
    ...colorsmine,
    name: 'mountain',
    icon: '',
    wallpaper: WP + 'mountain4.png',
    accent: '$teal',
};

const mountain2 = {
	...darkmine,
    ...miscmine,
    ...colorsmine,
    name: 'mountain 2',
    icon: '',
    wallpaper: WP + 'mountain9edited.png',
    accent: '$teal',
};

const mountain3 = {
	...darkmine,
    ...miscmine,
    ...colorsmine,
    name: 'mountain 3',
    icon: '',
    wallpaper: WP + 'mountain11.png',
    accent: '$red',
};

const desert = {
	...darkmine,
    ...miscmine,
    ...colorsmine,
    name: 'desert',
    icon: '',
    wallpaper: WP + 'desert3.png',
    accent: '$teal',
    border_width: 5,
};


const leaves_dark = {
    ...kitty_dark,
    wallpaper: WP + 'leaves.jpg',
    name: 'leaves_dark',
    icon: '󰌪',
    accent: '$green',
    widget_opacity: 92,
    active_gradient: 'to right, $accent, darken($accent, 14%)',
    border_opacity: 86,
    bg_color: 'transparentize(#171717, 0.3)',
    hypr_active_border: 'rgba(57e389FF)',
    bar_style: 'floating',
    radii: 0,
    wallpaper_fg: 'white',
    additional_scss: `
        window#quicksettings .quicksettings {
            margin-right: $wm_gaps;
        }
    `,
};

const leaves_light = {
    ...leaves_dark,
    ...light,
    name: 'leaves_light',
    accent: 'darken($green, 10%)',
    bg_color: 'transparentize(#fff, 0.1)',
    active_gradient: 'to right, $accent, darken($accent, 6%)',
};

const ivory = {
    wallpaper: WP + 'ivory.png',
    name: 'ivory',
    icon: '󰟆',
    ...light,
    ...misc,
    ...colors,
    bg_color: '#fffff0',
    bar_style: 'separated',
    widget_bg: '$accent',
    widget_opacity: 64,
    drop_shadow: false,
    border_width: 2,
    border_opacity: 0,
    active_gradient: 'to right, $accent, darken($accent, 6%)',
    wallpaper_fg: '$bg_color',
    hypr_active_border: 'rgba(111111FF)',
    additional_scss: `
        window#quicksettings .quicksettings,
        window#dashboard .dashboard {
            margin-top: 0;
        }
    `,
};

const cutefish = {
    ...kitty_dark,
    wallpaper: WP + 'cutefish.jpeg',
    name: 'cutefish',
    icon: '󰈺',
    accent: 'lighten($blue, 20%)',
    active_gradient: 'to right, $accent, lighten(mix($orange, $blue, 70%), 20%)',
    border_opacity: 94,
    brorder_width: 2,
    radii: 9,
    desktop_clock: 'end end',
    hypr_active_border: 'rgba(3f3f3fFF)',
    bg_color: 'transparentize(#171717, 0.3)',
};

const cherry = {
    ...kitty_dark,
    wallpaper: WP + 'cherry.png',
    name: 'cherry',
    icon: '',
    accent: '$blue',
    active_gradient: 'to right, $accent, lighten(mix($magenta, $blue, 70%), 18%)',
    brorder_width: 2,
    radii: 13,
    bg_color: 'transparentize(#171717, 0.3)',
};

export default [
    // kitty_dark,
    // kitty_light,
    leaves,
    plant,
    // leaves_dark,
    // leaves_light,
    // ivory,
    // cutefish,
    // cherry,
    mountain,
    mountain2,
    mountain3,
    desert,
    beach,
];
