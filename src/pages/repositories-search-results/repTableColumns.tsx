import React from 'react';
import { createColumnHelper } from '@tanstack/table-core';
import { RepDataDto } from 'src/models/tasks';

const columnHelper = createColumnHelper<RepDataDto>();

const GetRepTableColumns = () => {
	return [
		columnHelper.accessor('name', {
			size: 100,
			header: () => <span>Название</span>,
			cell: (info) => <span>{info.getValue()}</span>,
		}),
		columnHelper.accessor('language', {
			size: 200,
			header: () => <span>Язык</span>,
			cell: (info) => <span>{info.getValue()}</span>,
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
			size: 250,
			header: () => <span>Дата обновления</span>,
			cell: (info) => <span>{info.getValue()}</span>,
		}),
	];
};

export default GetRepTableColumns;
