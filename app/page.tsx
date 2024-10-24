import React from 'react';
import prisma from '@/prisma/client';
import { Flex, Table, Tabs, Text } from '@radix-ui/themes';
import { BsPinAngle } from 'react-icons/bs';
import Filters from './Filters';
import ItemBadge from './components/ItemBadge';
import StatusBadge from './components/StatusBadge';
import Link from 'next/link';
import { BiSortAlt2 } from 'react-icons/bi';

export default async function Home() {
  const items = await prisma.item.findMany();

  return (
    <div className='w-full mx-auto px-5 py-6'>
      <div className='p-6 dark:bg-slate-800 bg-gray-100 rounded-xl'>
        <Tabs.Root defaultValue='primary'>
          <Tabs.List size={'2'}>
            <Tabs.Trigger value='primary'>Table Layout</Tabs.Trigger>
            <Tabs.Trigger value='secondary'>Card Layout</Tabs.Trigger>
          </Tabs.List>

          <Tabs.Content value="primary">
            <div className='block pt-3 pb-5'>
              <Text size={'3'}>
                <div className='px-1 pt-6'>
                  <span className='font-bold'>Rationale</span>: Given the extensive data in the table, I suggest making both the header and the first column to be sticky. This way, the Item name and table header remain visible while scrolling horizontally or vertically.
                </div>
              </Text>
              <Filters />
              <Table.Root layout={'auto'} size={'2'}>
                <Table.Header>
                  <Table.Row className='sticky'>
                    <Table.ColumnHeaderCell width={'auto'} minWidth={'150px'} className='sticky left-0 z-10'>
                      <div className='flex items-center space-x-1'>
                        <p>Item No.</p>
                        <BiSortAlt2 className='text-lg'/>
                      </div>
                    </Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell width={'auto'} minWidth={'140px'} className='hidden md:table-cell'>
                      <div className='flex items-center space-x-1'>
                        <p>Date</p>
                        <BiSortAlt2 className='text-lg'/>
                      </div>
                    </Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell width={'auto'} minWidth={'150px'} className='hidden md:table-cell'>
                      <div className='flex items-center space-x-1'>
                        <p>Sch/Est</p>
                        <BiSortAlt2 className='text-lg'/>
                      </div>
                    </Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell width={'auto'} minWidth={'150px'} justify={'center'} className='hidden md:table-cell'>
                      <div className='flex items-center justify-center space-x-1'>
                        <p>Act</p>
                        <BiSortAlt2 className='text-lg'/>
                      </div>
                    </Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell width={'auto'} minWidth={'150px'} justify={'center'} className='hidden md:table-cell'>
                      <div className='flex items-center justify-center space-x-1'>
                        <p>To</p>
                        <BiSortAlt2 className='text-lg'/>
                      </div>
                    </Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell width={'auto'} minWidth={'160px'} justify={'center'} className='hidden md:table-cell'>
                      <div className='flex items-center justify-center space-x-1'>
                        <p>Title</p>
                        <BiSortAlt2 className='text-lg'/>
                      </div>
                    </Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell width={'auto'} minWidth={'160px'} justify={'center'} className='hidden md:table-cell'>
                      <div className='flex items-center justify-center space-x-1'>
                        <p>Type</p>
                        <BiSortAlt2 className='text-lg'/>
                      </div>
                    </Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell width={'auto'} minWidth={'150px'} justify={'center'} className='hidden md:table-cell'>
                      <div className='flex items-center justify-center space-x-1'>
                        <p>Info</p>
                        <BiSortAlt2 className='text-lg'/>
                      </div>
                    </Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell width={'auto'} minWidth={'150px'} justify={'center'} className='hidden md:table-cell'>
                      <div className='flex items-center justify-center space-x-1'>
                        <p>Alert</p>
                        <BiSortAlt2 className='text-lg'/>
                      </div>
                    </Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell width={'auto'} minWidth={'160px'} justify={'center'} className='hidden md:table-cell'>
                      <div className='flex items-center justify-center space-x-1'>
                        <p>Dept A</p>
                        <BiSortAlt2 className='text-lg'/>
                      </div>
                    </Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell width={'auto'} minWidth={'160px'} justify={'center'} className='hidden md:table-cell'>
                      <div className='flex items-center justify-center space-x-1'>
                        <p>Dept B</p>
                        <BiSortAlt2 className='text-lg'/>
                      </div>
                    </Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell width={'auto'} minWidth={'160px'} justify={'center'} className='hidden md:table-cell'>
                      <div className='flex items-center justify-center space-x-1'>
                        <p>Dept C</p>
                        <BiSortAlt2 className='text-lg'/>
                      </div>
                    </Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell width={'auto'} minWidth={'150px'} justify={'center'} className='hidden md:table-cell'>
                      <div className='flex items-center justify-center space-x-1'>
                        <p>Issues</p>
                        <BiSortAlt2 className='text-lg'/>
                      </div>
                    </Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell width={'auto'} minWidth={'200px'} justify={'center'} className='hidden md:table-cell'>
                      <div className='flex items-center justify-center space-x-1'>
                        <p>Status</p>
                        <BiSortAlt2 className='text-lg'/>
                      </div>
                    </Table.ColumnHeaderCell>
                  </Table.Row>
                </Table.Header>

                <Table.Body>
                  {items.map(item => (
                    <Table.Row key={item.id} align={'center'}>
                      <Table.Cell className='sticky left-0'>
                        <div className='item-wrap flex items-center space-x-6'>
                          <button className='hover:dark:text-amber-500 hover:text-red-600 transition-colors hover:ease-in-out'>
                            <BsPinAngle className='text-lg' />
                          </button>
                          <div className='block'>
                            <div className='item-no'>
                              <Link href="#" className='font-medium underline'>{item.itemno}</Link>
                            </div>
                            <div className='item-category pt-1'>
                              <ItemBadge category={item.category} />
                            </div>
                          </div>
                        </div>                  
                      </Table.Cell>
                      <Table.Cell className='hidden md:table-cell'>{item.date}</Table.Cell>
                      <Table.Cell className='hidden md:table-cell'>{item.schedule}</Table.Cell>
                      <Table.Cell justify={'center'} className='hidden md:table-cell'>{item.act}</Table.Cell>
                      <Table.Cell justify={'center'} className='hidden md:table-cell'>{item.to}</Table.Cell>
                      <Table.Cell justify={'center'} className='hidden md:table-cell'>{item.title}</Table.Cell>
                      <Table.Cell justify={'center'} className='hidden md:table-cell'>{item.type}</Table.Cell>
                      <Table.Cell justify={'center'} className='hidden md:table-cell'>{item.info}</Table.Cell>
                      <Table.Cell justify={'center'} className='hidden md:table-cell'>{item.alert}</Table.Cell>
                      <Table.Cell justify={'center'} className='hidden md:table-cell'>{item.deptA}</Table.Cell>
                      <Table.Cell justify={'center'} className='hidden md:table-cell'>{item.deptB}</Table.Cell>
                      <Table.Cell justify={'center'} className='hidden md:table-cell'>{item.deptC}</Table.Cell>
                      <Table.Cell justify={'center'} className='hidden md:table-cell'>{item.issues}</Table.Cell>
                      <Table.Cell justify={'center'} className='hidden md:table-cell'><StatusBadge status={item.status} /></Table.Cell>
                    </Table.Row>
                  ))}
                </Table.Body>
              </Table.Root>
            </div>
          </Tabs.Content>

          <Tabs.Content value="secondary">
            <div className='block pt-10 pb-5'>
              <Flex direction='column' gap='3'>

              </Flex>
            </div>
          </Tabs.Content>
        </Tabs.Root>
      </div>
    </div>
  )
}
