import React from 'react'
import prisma from '@/prisma/client'
import { Card, Flex, Table, Tabs, Text } from '@radix-ui/themes'
import { BsPinAngle } from 'react-icons/bs'
import Filters from './Filters'
import ItemBadge from './components/ItemBadge'
import StatusBadge from './components/StatusBadge'
import Link from 'next/link'
import { BiSortAlt2 } from 'react-icons/bi'

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
              <Table.Root size={'2'} className='table-item'>
                <Table.Header>
                  <Table.Row className='sticky'>
                    <Table.ColumnHeaderCell width={'auto'} minWidth={'150px'} py={'6'} className='hidden md:table-cell sticky left-0 z-10'>
                      <button className='flex items-center space-x-1'>
                        <p>Item No.</p>
                        <BiSortAlt2 className='text-lg'/>
                      </button>
                    </Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell width={'auto'} minWidth={'140px'} py={'6'} className='hidden md:table-cell'>
                      <button className='flex items-center space-x-1'>
                        <p>Date</p>
                        <BiSortAlt2 className='text-lg'/>
                      </button>
                    </Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell width={'auto'} minWidth={'150px'} py={'6'} className='hidden md:table-cell'>
                      <button className='flex items-center space-x-1'>
                        <p>Sch/Est</p>
                        <BiSortAlt2 className='text-lg'/>
                      </button>
                    </Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell width={'auto'} minWidth={'150px'} justify={'center'} py={'6'} className='hidden md:table-cell'>
                      <button className='flex w-full items-center justify-center space-x-1'>
                        <p>Act</p>
                        <BiSortAlt2 className='text-lg'/>
                      </button>
                    </Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell width={'auto'} minWidth={'150px'} justify={'center'} py={'6'} className='hidden md:table-cell'>
                      <button className='flex w-full items-center justify-center space-x-1'>
                        <p>To</p>
                        <BiSortAlt2 className='text-lg'/>
                      </button>
                    </Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell width={'auto'} minWidth={'160px'} justify={'center'} py={'6'} className='hidden md:table-cell'>
                      <button className='flex w-full items-center justify-center space-x-1'>
                        <p>Title</p>
                        <BiSortAlt2 className='text-lg'/>
                      </button>
                    </Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell width={'auto'} minWidth={'160px'} justify={'center'} py={'6'} className='hidden md:table-cell'>
                      <button className='flex w-full items-center justify-center space-x-1'>
                        <p>Type</p>
                        <BiSortAlt2 className='text-lg'/>
                      </button>
                    </Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell width={'auto'} minWidth={'150px'} justify={'center'} py={'6'} className='hidden md:table-cell'>
                      <button className='flex w-full items-center justify-center space-x-1'>
                        <p>Info</p>
                        <BiSortAlt2 className='text-lg'/>
                      </button>
                    </Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell width={'auto'} minWidth={'150px'} justify={'center'} py={'6'} className='hidden md:table-cell'>
                      <button className='flex w-full items-center justify-center space-x-1'>
                        <p>Alert</p>
                        <BiSortAlt2 className='text-lg'/>
                      </button>
                    </Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell width={'auto'} minWidth={'160px'} justify={'center'} py={'6'} className='hidden md:table-cell'>
                      <button className='flex w-full items-center justify-center space-x-1'>
                        <p>Dept A</p>
                        <BiSortAlt2 className='text-lg'/>
                      </button>
                    </Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell width={'auto'} minWidth={'160px'} justify={'center'} py={'6'} className='hidden md:table-cell'>
                      <button className='flex w-full items-center justify-center space-x-1'>
                        <p>Dept B</p>
                        <BiSortAlt2 className='text-lg'/>
                      </button>
                    </Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell width={'auto'} minWidth={'160px'} justify={'center'} py={'6'} className='hidden md:table-cell'>
                      <button className='flex w-full items-center justify-center space-x-1'>
                        <p>Dept C</p>
                        <BiSortAlt2 className='text-lg'/>
                      </button>
                    </Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell width={'auto'} minWidth={'150px'} justify={'center'} py={'6'} className='hidden md:table-cell'>
                      <button className='flex w-full items-center justify-center space-x-1'>
                        <p>Issues</p>
                        <BiSortAlt2 className='text-lg'/>
                      </button>
                    </Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell width={'auto'} minWidth={'200px'} justify={'center'} py={'6'} className='hidden md:table-cell'>
                      <button className='flex w-full items-center justify-center space-x-1'>
                        <p>Status</p>
                        <BiSortAlt2 className='text-lg'/>
                      </button>
                    </Table.ColumnHeaderCell>
                  </Table.Row>
                </Table.Header>

                <Table.Body>
                  {items.map(item => (
                    <Table.Row key={item.id} align={'center'}>
                      <Table.Cell py={'3'} className='sticky left-0'>
                        <div className='item-wrap w-full flex items-center space-x-4 md:space-x-6'>
                          <button className='hover:dark:text-amber-500 hover:text-red-600 transition-colors hover:ease-in-out'>
                            <BsPinAngle className='text-lg' />
                          </button>
                          <div className='w-full block'>
                            <div className='flex justify-between items-center'>
                              <div className='block'>
                                <div className='item-no'>
                                  <Link href="#" className='font-medium underline'>{item.itemno}</Link>
                                </div>
                                <div className='item-category pt-1'>
                                  <ItemBadge category={item.category}/>
                                </div>
                              </div>
                              <div className='block md:hidden'>
                                <StatusBadge status={item.status} />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className='w-full block md:hidden mt-5 space-y-1'>
                          <div className='flex justify-between items-center'>
                            <div className='block space-x-2'>
                              <span className='font-medium'>Date:</span><span>{item.date}</span>
                            </div>
                            <div className='block space-x-2'>
                              <span className='font-medium'>Sch/Est:</span><span>{item.schedule}</span>
                            </div>
                          </div>

                          <div className='flex justify-between items-center'>
                            <div className='block space-x-2'>
                              <span className='font-medium'>Act:</span><span>{item.act}</span>
                            </div>
                            <div className='block space-x-2'>
                              <span className='font-medium'>To:</span><span>{item.to}</span>
                            </div>
                          </div>

                          <div className='flex justify-between items-center'>
                            <div className='block space-x-2'>
                              <span className='font-medium'>Title:</span><span>{item.title}</span>
                            </div>
                            <div className='block space-x-2'>
                              <span className='font-medium'>Type:</span><span>{item.type}</span>
                            </div>
                          </div>

                          <div className='flex justify-between items-center pb-3'>
                            <div className='block space-x-2'>
                              <span className='font-medium'>Info:</span><span>{item.info}</span>
                            </div>
                            <div className='block space-x-2'>
                              <span className='font-medium'>Alert:</span><span>{item.alert}</span>
                            </div>
                          </div>

                          <div className='block border dark:border-slate-600 border-gray-300 p-2 rounded-md space-y-1'>
                            <div className='block space-x-2'>
                              <span className='font-medium'>Dept A:</span><span>{item.deptA}</span>
                            </div>
                            <div className='block space-x-2'>
                              <span className='font-medium'>Dept B:</span><span>{item.deptB}</span>
                            </div>
                            <div className='block space-x-2'>
                              <span className='font-medium'>Dept C:</span><span>{item.deptC}</span>
                            </div>
                          </div>
                        </div>
                      </Table.Cell>
                      <Table.Cell py={'3'} className='hidden md:table-cell'>{item.date}</Table.Cell>
                      <Table.Cell py={'3'} className='hidden md:table-cell'>{item.schedule}</Table.Cell>
                      <Table.Cell py={'3'} justify={'center'} className='hidden md:table-cell'>{item.act}</Table.Cell>
                      <Table.Cell py={'3'} justify={'center'} className='hidden md:table-cell'>{item.to}</Table.Cell>
                      <Table.Cell py={'3'} justify={'center'} className='hidden md:table-cell'>{item.title}</Table.Cell>
                      <Table.Cell py={'3'} justify={'center'} className='hidden md:table-cell'>{item.type}</Table.Cell>
                      <Table.Cell py={'3'} justify={'center'} className='hidden md:table-cell'>{item.info}</Table.Cell>
                      <Table.Cell py={'3'} justify={'center'} className='hidden md:table-cell'>{item.alert}</Table.Cell>
                      <Table.Cell py={'3'} justify={'center'} className='hidden md:table-cell'>{item.deptA}</Table.Cell>
                      <Table.Cell py={'3'} justify={'center'} className='hidden md:table-cell'>{item.deptB}</Table.Cell>
                      <Table.Cell py={'3'} justify={'center'} className='hidden md:table-cell'>{item.deptC}</Table.Cell>
                      <Table.Cell py={'3'} justify={'center'} className='hidden md:table-cell'>{item.issues}</Table.Cell>
                      <Table.Cell py={'3'} justify={'center'} className='hidden md:table-cell'><StatusBadge status={item.status} /></Table.Cell>
                    </Table.Row>
                  ))}
                </Table.Body>
              </Table.Root>
            </div>
          </Tabs.Content>

          <Tabs.Content value="secondary">
            <div className='block pt-3 pb-5'>
              <Text size={'3'}>
                <div className='px-1 pt-6'>
                  <span className='font-bold'>Rationale</span>: Suggest to present the information in a card layout, showing the first 12 items with pagination for items beyond that. This approach eliminates the need for horizontal scrolling, unlike in a table layout.
                </div>
              </Text>
              <Filters />
              <div className='mt-1 pt-4 border-t-2 dark:border-slate-500 border-gray-300 flex flex-wrap'>
                {items.map(item => (
                  <div key={item.id} className='px-0 py-2 md:px-2 w-full md:w-1/2 lg:w-1/3'>
                    <Card>
                      <div className='item-wrap w-full flex items-center space-x-4 md:space-x-6'>
                        <button className='hover:dark:text-amber-500 hover:text-red-600 transition-colors hover:ease-in-out'>
                          <BsPinAngle className='text-lg' />
                        </button>
                        <div className='w-full block'>
                          <div className='flex justify-between items-center'>
                            <div className='block'>
                              <div className='item-no'>
                                <Link href="#" className='font-medium underline'>{item.itemno}</Link>
                              </div>
                              <div className='item-category pt-1'>
                                <ItemBadge category={item.category}/>
                              </div>
                            </div>
                            <div className='block'>
                              <StatusBadge status={item.status} />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='w-full block mt-5 space-y-1'>
                        <div className='flex justify-between items-center'>
                          <div className='block space-x-2'>
                            <span className='font-medium'>Date:</span><span>{item.date}</span>
                          </div>
                          <div className='block space-x-2'>
                            <span className='font-medium'>Sch/Est:</span><span>{item.schedule}</span>
                          </div>
                        </div>

                        <div className='flex justify-between items-center'>
                          <div className='block space-x-2'>
                            <span className='font-medium'>Act:</span><span>{item.act}</span>
                          </div>
                          <div className='block space-x-2'>
                            <span className='font-medium'>To:</span><span>{item.to}</span>
                          </div>
                        </div>

                        <div className='flex justify-between items-center'>
                          <div className='block space-x-2'>
                            <span className='font-medium'>Title:</span><span>{item.title}</span>
                          </div>
                          <div className='block space-x-2'>
                            <span className='font-medium'>Type:</span><span>{item.type}</span>
                          </div>
                        </div>

                        <div className='flex justify-between items-center pb-3'>
                          <div className='block space-x-2'>
                            <span className='font-medium'>Info:</span><span>{item.info}</span>
                          </div>
                          <div className='block space-x-2'>
                            <span className='font-medium'>Alert:</span><span>{item.alert}</span>
                          </div>
                        </div>

                        <div className='block border dark:border-slate-600 border-gray-300 p-2 rounded-md space-y-1'>
                          <div className='block space-x-2 w-full'>
                            <span className='font-medium'>Dept A:</span><span>{item.deptA}</span>
                          </div>
                          <div className='block space-x-2 w-full'>
                            <span className='font-medium'>Dept B:</span><span>{item.deptB}</span>
                          </div>
                          <div className='block space-x-2 w-full'>
                            <span className='font-medium'>Dept C:</span><span>{item.deptC}</span>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </Tabs.Content>
        </Tabs.Root>
      </div>
    </div>
  )
}
