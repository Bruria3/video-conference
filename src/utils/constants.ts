import { DiscussionDetails, DiscussionManager, Settings, Users } from "../pages";

export const navItems = [
    { text: 'Users', path: '/', component: Users },
    { text: 'Discussion Manager', path: '/discussion-manager', component: DiscussionManager },
    { text: 'Discussion Details', path: '/discussion-details', component: DiscussionDetails },
    { text: 'Settings', path: '/settings', component: Settings }
];