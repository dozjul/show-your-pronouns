//import * as _ from 'lodash';
import { Language } from '@rye/pronouns-base';
import { PronounsProvider } from '@rye/pronouns-user-providers';
import {getUser, getAgeOfUser, getAllNamesOfUser, getFormattedPronounsOfUser, getHTMLFormattedNamesOfUser, getHTMLFormattedPronounsOfUser, getPreferedNamesOfUser, getPronounsBadgeOfUser, getPronounsOfUser, getHTMLFormattedPronounsOfUserNoLink, getPronounsPageUser, getPrideFlagsOfUser} from './HTMLAdapter';
import {newUser} from './UserMng';
import {PronounsLookup} from "./PronounsLookup";
import {getPronounsBadge, getPronounsBadgeWithSnackbarMsg} from "./PronounsBadge-HTMLAdapter";
import {getPronounsUser} from "@rye/pronouns-user-providers";

export {getUser, getAgeOfUser, getAllNamesOfUser, getFormattedPronounsOfUser, getHTMLFormattedNamesOfUser, getHTMLFormattedPronounsOfUser, getPreferedNamesOfUser, getPronounsBadgeOfUser, getPronounsOfUser, getHTMLFormattedPronounsOfUserNoLink, getPronounsPageUser, getPrideFlagsOfUser};
export { Language };
export {newUser};
export { PronounsProvider, getPronounsUser };
export {getPronounsBadge, getPronounsBadgeWithSnackbarMsg};
export {PronounsLookup}
