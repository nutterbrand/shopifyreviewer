export const filterDomain = domain => domain.replace(/^(?:https?:\/\/)?(?:www\.)?/i, '').split('/')[ 0 ];