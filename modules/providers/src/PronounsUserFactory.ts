/// <reference types="typescript" />
// @ts-ignore
import { Language } from "@rye/pronouns-base";
import { PronounsAlejoUser } from "./PronounsAlejoUser";
import { PronounsPageUser } from "./PronounsPageUser";
// @ts-ignore
import { PronounsUser } from "@rye/pronouns-user-framework";
export function getPronounsUser(provider: string, username: string, language:Language): PronounsUser {
    switch (provider) {
        case 'pronouns.page':
            return new PronounsPageUser(username, language);
        case 'pronouns.alejo.io':
            return new PronounsAlejoUser(username, language);
        default:
            throw new Error('Unsupported provider');
    }
}
