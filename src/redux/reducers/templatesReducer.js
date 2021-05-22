import {
    GET_ALL_TEMPLATES_REQUEST,
    GET_ALL_TEMPLATES_SUCCESS,
    GET_ALL_TEMPLATES_FAIL,
    GET_ALL_FILTERED_TEMPLATES,
    SET_TEMPLATE_HEADER,
} from '../actions/types';

const initialState = {
    templates: [
        {
            category: ['Health', 'E-commerce', 'Agriculture'],
            name: 'Alumni Membership Form Template',
            description:
                'Engage your alumni netwoerk better with this alumni registration form template. Embed this in your website',
            link: 'https://formpl.us/templates',
        },
        {
            category: ['Health', 'E-commerce', 'Agriculture'],
            name: 'Alumni Membership Form Template',
            description:
                'Engage your alumni netwoerk better with this alumni registration form template. Embed this in your website',
            link: 'https://formpl.us/templates',
        },
        {
            category: ['Health', 'E-commerce', 'Agriculture'],
            name: 'Alumni Membership Form Template',
            description:
                'Engage your alumni netwoerk better with this alumni registration form template. Embed this in your website',
            link: 'https://formpl.us/templates',
        },
        {
            category: ['Health', 'E-commerce', 'Agriculture'],
            name: 'Alumni Membership Form Template',
            description:
                'Engage your alumni netwoerk better with this alumni registration form template. Embed this in your website',
            link: 'https://formpl.us/templates',
        },
        {
            category: ['Health', 'E-commerce', 'Agriculture'],
            name: 'Alumni Membership Form Template',
            description:
                'Engage your alumni netwoerk better with this alumni registration form template. Embed this in your website',
            link: 'https://formpl.us/templates',
        },
        {
            category: ['Health', 'E-commerce', 'Agriculture'],
            name: 'Alumni Membership Form Template',
            description:
                'Engage your alumni netwoerk better with this alumni registration form template. Embed this in your website',
            link: 'https://formpl.us/templates',
        },
        {
            category: ['Health', 'E-commerce', 'Agriculture'],
            name: 'Alumni Membership Form Template',
            description:
                'Engage your alumni netwoerk better with this alumni registration form template. Embed this in your website',
            link: 'https://formpl.us/templates',
        },
        {
            category: ['Health', 'E-commerce', 'Agriculture'],
            name: 'Alumni Membership Form Template',
            description:
                'Engage your alumni netwoerk better with this alumni registration form template. Embed this in your website',
            link: 'https://formpl.us/templates',
        },
        {
            category: ['Health', 'E-commerce', 'Agriculture'],
            name: 'Alumni Membership Form Template',
            description:
                'Engage your alumni netwoerk better with this alumni registration form template. Embed this in your website',
            link: 'https://formpl.us/templates',
        },
        {
            category: ['Health', 'E-commerce', 'Agriculture'],
            name: 'Alumni Membership Form Template',
            description:
                'Engage your alumni netwoerk better with this alumni registration form template. Embed this in your website',
            link: 'https://formpl.us/templates',
        },
        {
            category: ['Health', 'E-commerce', 'Agriculture'],
            name: 'Alumni Membership Form Template',
            description:
                'Engage your alumni netwoerk better with this alumni registration form template. Embed this in your website',
            link: 'https://formpl.us/templates',
        },
        {
            category: ['Health', 'E-commerce', 'Agriculture'],
            name: 'Alumni Membership Form Template',
            description:
                'Engage your alumni netwoerk better with this alumni registration form template. Embed this in your website',
            link: 'https://formpl.us/templates',
        },
        {
            category: ['Health', 'E-commerce', 'Agriculture'],
            name: 'Alumni Membership Form Template',
            description:
                'Engage your alumni netwoerk better with this alumni registration form template. Embed this in your website',
            link: 'https://formpl.us/templates',
        },
        {
            category: ['Health', 'E-commerce', 'Agriculture'],
            name: 'Alumni Membership Form Template',
            description:
                'Engage your alumni netwoerk better with this alumni registration form template. Embed this in your website',
            link: 'https://formpl.us/templates',
        },
        {
            category: ['Health', 'E-commerce', 'Agriculture'],
            name: 'Alumni Membership Form Template',
            description:
                'Engage your alumni netwoerk better with this alumni registration form template. Embed this in your website',
            link: 'https://formpl.us/templates',
        },
        {
            category: ['Health', 'E-commerce', 'Agriculture'],
            name: 'Alumni Membership Form Template',
            description:
                'Engage your alumni netwoerk better with this alumni registration form template. Embed this in your website',
            link: 'https://formpl.us/templates',
        },
        {
            category: ['Health', 'E-commerce', 'Agriculture'],
            name: 'Alumni Membership Form Template',
            description:
                'Engage your alumni netwoerk better with this alumni registration form template. Embed this in your website',
            link: 'https://formpl.us/templates',
        },
        {
            category: ['Health', 'E-commerce', 'Agriculture'],
            name: 'Alumni Membership Form Template',
            description:
                'Engage your alumni netwoerk better with this alumni registration form template. Embed this in your website',
            link: 'https://formpl.us/templates',
        },
        {
            category: ['Health', 'E-commerce', 'Agriculture'],
            name: 'Alumni Membership Form Template',
            description:
                'Engage your alumni netwoerk better with this alumni registration form template. Embed this in your website',
            link: 'https://formpl.us/templates',
        },
        {
            category: ['Health', 'E-commerce', 'Agriculture'],
            name: 'Alumni Membership Form Template',
            description:
                'Engage your alumni netwoerk better with this alumni registration form template. Embed this in your website',
            link: 'https://formpl.us/templates',
        },
    ],
    loading: false,
    category: 'All',
};

export const templatesReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_TEMPLATES_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case GET_ALL_TEMPLATES_SUCCESS:
            return {
                ...state,
                loading: false,
                templates: action.payload,
            };
        case GET_ALL_TEMPLATES_FAIL:
            return {
                ...state,
                loading: false,
                templates: action.payload,
            };
        case GET_ALL_FILTERED_TEMPLATES:
            return {
                ...state,
                templates: state.templates.filter((template) => {
                    if (action.payload !== '') {
                        // change current template name to lowercase
                        const TEMPLATE__NAME__AS__LOWERCASE =
                            template.name.toLowerCase();
                        // change search term to lowercase
                        const FILTER = action.payload.toLowerCase();
                        // check to see if the current list item includes the search term
                        // If it does, it will be added to newList. Using lowercase eliminates
                        // issues with capitalization in search terms and search content
                        return TEMPLATE__NAME__AS__LOWERCASE.includes(FILTER);
                        //return template;
                    } else {
                        return state.templates;
                    }
                }),
            };
        case SET_TEMPLATE_HEADER:
            return {
                ...state,
                category: action.payload,
            };
        default:
            return state;
    }
};

/*

*/
