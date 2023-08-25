import { Keychain } from './types';

export const CONTRACT_KEYCHAINS: Record<string, Keychain> = {
  V3_FACTORY_ADV_TOKEN: {
    '0x1': '0x8a4A9E36106Ee290811B89e06e2faFE913507965',
    '0x5': '0xb0c5c96c3d21c1d58B98a5366dF0Af7AfcD94F95',
    '0x64': '0x8a4A9E36106Ee290811B89e06e2faFE913507965',
    '0x89': '0x8a4A9E36106Ee290811B89e06e2faFE913507965',
    '0xa': '0x84561C97156a128662B62952890469214FDC87bf',
    '0xa4b1': '0x8a4A9E36106Ee290811B89e06e2faFE913507965',
  },
  V3_FACTORY_ORIGINAL: {
    '0x1': '0x7e988A9db2F8597735fc68D21060Daed948a3e8C',
    '0x5': '0x7e988A9db2F8597735fc68D21060Daed948a3e8C',
    '0x64': '0x7e988A9db2F8597735fc68D21060Daed948a3e8C',
    '0x89': '0x7e988A9db2F8597735fc68D21060Daed948a3e8C',
    '0xa': '0x3E0eAdE343Ddc556a6Cf0f858e4f685ba303ce71',
    '0xa4b1': '0xb08Cc8C343cF6dC20d8cf51Fb2D6C436c6390dAa',
  },
  LOOT_SINGLETON: {
    '0x1': '0x0444AE984b9563C8480244693ED65F25B3C64a4E',
    '0x5': '0x0444AE984b9563C8480244693ED65F25B3C64a4E',
    '0x64': '0x0444AE984b9563C8480244693ED65F25B3C64a4E',
    '0x89': '0x0444AE984b9563C8480244693ED65F25B3C64a4E',
    '0xa': '0x0444AE984b9563C8480244693ED65F25B3C64a4E',
    '0xa4b1': '0x0444AE984b9563C8480244693ED65F25B3C64a4E',
  },
  SHARES_SINGLETON: {
    '0x1': '0x8124Cbb807A7b64123F3dEc3EF64995d8B10d3Eb',
    '0x5': '0x8124Cbb807A7b64123F3dEc3EF64995d8B10d3Eb',
    '0x64': '0x8124Cbb807A7b64123F3dEc3EF64995d8B10d3Eb',
    '0x89': '0x8124Cbb807A7b64123F3dEc3EF64995d8B10d3Eb',
    '0xa': '0x8124Cbb807A7b64123F3dEc3EF64995d8B10d3Eb',
    '0xa4b1': '0x8124Cbb807A7b64123F3dEc3EF64995d8B10d3Eb',
  },
  BAAL_SINGLETON: {
    '0x1': '0x5DcE1044A7E2E35D6524001796cee47252f18411',
    '0x5': '0x5DcE1044A7E2E35D6524001796cee47252f18411',
    '0x64': '0x5DcE1044A7E2E35D6524001796cee47252f18411',
    '0x89': '0x5DcE1044A7E2E35D6524001796cee47252f18411',
    '0xa': '0x69f4D1788e39c87893C980c06EdF4b7f686e2938',
    '0xa4b1': '0x17234C0Ae25AF09fAf57B9D5ea2B93C1f220E800',
  },
  GNOSIS_MULTISEND: {
    '0x1': '0xA238CBeb142c10Ef7Ad8442C6D1f9E89e07e7761',
    '0x5': '0xA238CBeb142c10Ef7Ad8442C6D1f9E89e07e7761',
    '0x64': '0xA238CBeb142c10Ef7Ad8442C6D1f9E89e07e7761',
    '0x89': '0xA238CBeb142c10Ef7Ad8442C6D1f9E89e07e7761',
    '0xa': '0x998739BFdAAdde7C933B942a68053933098f9EDa',
    '0xa4b1': '0xA238CBeb142c10Ef7Ad8442C6D1f9E89e07e7761',
  },
  GNOSIS_SIGNLIB: {
    '0x1': '0xA65387F16B013cf2Af4605Ad8aA5ec25a2cbA3a2',
    '0x5': '0xA65387F16B013cf2Af4605Ad8aA5ec25a2cbA3a2',
    '0x64': '0xA65387F16B013cf2Af4605Ad8aA5ec25a2cbA3a2',
    '0x89': '0xA65387F16B013cf2Af4605Ad8aA5ec25a2cbA3a2',
    '0xa': '0x98FFBBF51bb33A056B08ddf711f289936AafF717',
    '0xa4b1': '0xA65387F16B013cf2Af4605Ad8aA5ec25a2cbA3a2',
  },
  TRIBUTE_MINION: {
    '0x1': '0x5c17BFBaB751C5ddF1Ff267acF8fF919537F39Cf',
    '0x5': '0x5c17BFBaB751C5ddF1Ff267acF8fF919537F39Cf',
    '0x64': '0x5c17BFBaB751C5ddF1Ff267acF8fF919537F39Cf',
    '0x89': '0x51498dDdd2A8cdeC82932E08A37eBaF346C38EFd',
    '0xa': '0x7707964B4C24A6b8b7B747F7507F56818857A7C2',
    '0xa4b1': '0x7707964B4C24A6b8b7B747F7507F56818857A7C2',
  },
  POSTER: {
    '0x1': '0x000000000000cd17345801aa8147b8d3950260ff',
    '0x5': '0x000000000000cd17345801aa8147b8d3950260ff',
    '0x64': '0x000000000000cd17345801aa8147b8d3950260ff',
    '0x89': '0x000000000000cd17345801aa8147b8d3950260ff',
    '0xa': '0x000000000000cd17345801aa8147b8d3950260ff',
    '0xa4b1': '0x000000000000cd17345801aa8147b8d3950260ff',
  },
  VAULT_SUMMONER: {
    '0x1': '0x594E630efbe8dbd810c168e3878817a4094bB312',
    '0x5': '0x594E630efbe8dbd810c168e3878817a4094bB312',
    '0x64': '0x594E630efbe8dbd810c168e3878817a4094bB312',
    '0x89': '0x594E630efbe8dbd810c168e3878817a4094bB312',
    '0xa': '0xb04111e7b4576164145EF97EB81fd43DA0F2D675',
    '0xa4b1': '0xC39E8D4DE75c6aC025a0C07dCd8Aeb0728C5DBF1',
  },
  ZODIAC_FACTORY: {
    '0x1': '0x00000000000DC7F163742Eb4aBEf650037b1f588',
    '0x5': '0x00000000000DC7F163742Eb4aBEf650037b1f588',
    '0x64': '0x00000000000DC7F163742Eb4aBEf650037b1f588',
    '0x89': '0x00000000000DC7F163742Eb4aBEf650037b1f588',
    '0xa': '0xC22834581EbC8527d974F8a1c97E1bEA4EF910BC',
    '0xa4b1': '0x00000000000DC7F163742Eb4aBEf650037b1f588',
  },
};
