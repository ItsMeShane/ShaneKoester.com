import { Layout } from "react-grid-layout";

export default function applyConditionalWidgetSizing(currentBreakpoint: { bp: string, cols: number }, _layout: Layout[], _oldItem: Layout, newItem: Layout, placeholder: Layout,) {
    // widgets have different sizing constraints per breakpoint
    switch (currentBreakpoint.bp) {
        case 'lg':
            switch (newItem.i) {
                case 'About Me':
                    if (newItem.w === 2 && newItem.h === 3) {
                        newItem.h = 2
                        placeholder.h = 2
                    } else if (newItem.w === 1 && newItem.h === 2) {
                        newItem.h = 3
                    }
                    break;
                case 'My Projects':
                    if (newItem.h > 3) {
                        newItem.maxW = 2
                    } else {
                        newItem.maxW = currentBreakpoint.cols
                    }
                    break;
                case 'Chat':

                    break;
                case 'My Work':

                    break;
                case 'Contact':
                    
                    break;

                default:
                    break;
            }
            break;
        case 'md':

            break;
        case 'sm':

            break;

        default:
            break;
    }
}