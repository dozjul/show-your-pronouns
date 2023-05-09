declare enum Language{
    en = 'en',
    de = 'de',
    es = 'es',
    fr = 'fr',
    it = 'it',
    nl = 'nl',
    pt = 'pt'
}
declare class LanguageNotYetSupportedError extends Error{}
declare class UserNotFoundError extends Error{}
declare class NoDataBecauseUserNotFound extends UserNotFoundError{}

export {UserNotFoundError, Language, LanguageNotYetSupportedError, NoDataBecauseUserNotFound};
