import { useReactTable } from '@tanstack/react-table';
import { Row, RowModel, Table } from '@tanstack/table-core';
import { getRowDetails } from '../getRowDetails';
import { Repository } from 'src/models/tasks';

describe('getRowDetails', () => {
	const data: Repository[] = [ // Тип Repository[] добавлен
     {
		 id: 1,
		 full_name: 'Test Name',
		 html_url: 'https://github.com/user/Test-Name',
		 description: 'Test Description',
		 topics: ["cli", "stock", "stock-analysis"],
		 language: 'TypeScript',
		 stargazers_count: 100,
		 forks_count: 50,
		 updated_at: '2023-10-26T12:00:00Z',
		 license: { name: 'MIT' },
		 name: 'Test Name'
	 },
     {
		 id: 2,
		 full_name: 'Test Name 2',
		 html_url: 'https://github.com/user/Test-Name-2',
		 description: 'Test Description 2',
		 topics: ["cli", "stock-analysis"],
		 language: 'Python',
		 stargazers_count: 200,
		 forks_count: 100,
		 updated_at: '2023-10-27T14:30:00Z',
		 license: { name: 'Apache 2.0' },
		 name: 'Test Name 2'
	 },
   ];
   
	const tableInstance = useReactTable({
		columns: [
			{
				accessorKey: 'name',
				header: 'Name',
			},
			{
				accessorKey: 'topics',
				header: 'Topics',
			},
			{
				accessorKey: 'language',
				header: 'Language',
			},
			{
				accessorKey: 'stargazers_count',
				header: 'Stargazers',
			},
			{
				accessorKey: 'license.name',
				header: 'License',
			},
		],
		data: data,
		getCoreRowModel: function (table: Table<any>): () => RowModel<any> {
			throw new Error('Function not implemented.');
		}
	});
	
	const row = tableInstance.getRowModel().rows[0];
	const row2 = tableInstance.getRowModel().rows[1];
	
	test('should return correct details from row object', () => {
	  const expectedDetails = {
		name: 'Test Name',
		topics: ["cli", "stock-analysis"],
		language: 'TypeScript',
		stargazers_count: 100,
		license: { name: 'MIT' },
	  };
  
	  const result = getRowDetails(row);
  
	  expect(result).toEqual(expectedDetails);
	});
  
	test('should handle missing properties gracefully', () => {
		const expectedDetails = {
		  name: 'Test Name 2',
		  topics: ["cli", "stock", "stock-analysis"],
		  language: 'Python',
		  stargazers_count: 200,
		  license: { name: 'Apache 2.0' },
		};
	
		const result = getRowDetails(row2);
	
		expect(result).toEqual(expectedDetails);
	  });
});