import React from 'react';
import { createColumnHelper } from '@tanstack/table-core';
import { Repository } from 'src/models/repos';
import { formatDate } from 'src/shared/utils/date/dateFormatting';

const columnHelper = createColumnHelper<Repository>();

const GetRepTableColumns = () => {
	return [
		columnHelper.accessor('name', {
			size: 250,
			header: () => <span>Название</span>,
			cell: (info) => <span>{info.getValue()}</span>,
			enableSorting: false,
		}),
		columnHelper.accessor('language', {
			size: 200,
			header: () => <span>Язык</span>,
			cell: (info) => <span>{info.getValue()}</span>,
			enableSorting: false,
		}),
		columnHelper.accessor('forks_count', {
			size: 200,
			header: () => <span>Число форков</span>,
			cell: (info) => <span>{info.getValue()}</span>,
		}),
		columnHelper.accessor('stargazers_count', {
			size: 200,
			header: () => <span>Число звезд</span>,
			cell: (info) => <span>{info.getValue()}</span>,
		}),
		columnHelper.accessor('updated_at', {
			size: 200,
			header: () => <span>Дата обновления</span>,
			cell: (info) => <span>{formatDate(new Date(info.getValue()))}</span>,
			sortDescFirst: true,
		}),
	];
};

export default GetRepTableColumns;
