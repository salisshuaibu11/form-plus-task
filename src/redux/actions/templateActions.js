import axios from 'axios';
import {
    GET_ALL_TEMPLATES_REQUEST,
    GET_ALL_TEMPLATES_SUCCESS,
    GET_ALL_TEMPLATES_FAIL,
    GET_ALL_FILTERED_TEMPLATES,
    SET_TEMPLATE_HEADER,
} from './types';

export const getTemplates = () => async (dispatch) => {
    try {
        dispatch({
            type: GET_ALL_TEMPLATES_REQUEST,
        });

        const { data } = await axios.get(
            'https://front-end-task-dot-fpls-dev.uc.r.appspot.com/api/v1/public/task_templates',
        );

        dispatch({
            type: GET_ALL_TEMPLATES_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: GET_ALL_TEMPLATES_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

export const getFilteredTemplates = (character) => (dispatch) => {
    dispatch({
        type: GET_ALL_FILTERED_TEMPLATES,
        payload: character,
    });
};

export const setTemplatesHeader = (category) => (dispatch) => {
    dispatch({
        type: SET_TEMPLATE_HEADER,
        payload: category,
    });
};
