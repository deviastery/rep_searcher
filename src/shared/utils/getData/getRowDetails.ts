import { Row } from '@tanstack/table-core';
import { RepDetailsDataDto, Repository } from 'src/models/tasks';

/**
 * Преобразует объект Row в объект с необходимыми свойствами.
 *
 * @param row Объект Row от библиотеки tanstack/table-core.
 * @returns Объект с свойствами name, description, language, forks_count, license.name.
 */
const getRowDetails = (row: Row<Repository>): RepDetailsDataDto => {
    const { name, language, stargazers_count, description, license } = row.original; 
    return {
      name,
      language,
      stargazers_count,
      description,
      license, 
    };
};

export { getRowDetails };
