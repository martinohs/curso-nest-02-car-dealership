import { Brand } from "src/brands/entities/brand.entity";

import { v4 as uuid } from 'uuid';

export const BRAND_SEED: Brand[] = [
        { id: uuid(),
        name:'toyota',
        createdAt: 1985124123
      },
      { id: uuid(),
        name:'volkswagen',
        createdAt: 1959433324
      },
      { id: uuid(),
        name:'chevrolet',
        createdAt: 19911231231
      },
]