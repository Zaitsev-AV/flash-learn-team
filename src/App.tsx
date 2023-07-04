import { useState } from 'react'

import { Modal } from '@/components/ui/modal'
import { DropdownMenu, Button, Header, Pagination, CustomSelect, Checkbox } from '@/components'

export const App = () => {
  const [page, setPage] = useState(1)

  return (
    <>
      <Header>
        <DropdownMenu />
      </Header>
      <Button />
      <CustomSelect items={['1', '2']} />
      <Pagination
        currentPage={page}
        pageSize={2}
        totalCount={30}
        siblingCount={1}
        onPageChange={setPage}
      />
      <div style={{ paddingLeft: '35%' }}>
        <CustomSelect items={['select1', 'select1', 'select1', 'select1']} width={210} />
      </div>
      <Modal
        body={
          <div>
            <CustomSelect items={['select1', 'select1', 'select1', 'select1']} />
            <CustomSelect items={['select1', 'select1', 'select1', 'select1']} />
            <CustomSelect items={['select1', 'select1', 'select1', 'select1']} />
          </div>
        }
        footer={
          <div>
            <Button variant={'secondary'}>secondary</Button>
            <Button variant={'primary'}>primary</Button>
          </div>
        }
        trigger={<Button variant={'primary'}>modal</Button>}
      />
      <div style={{ paddingLeft: '35%' }}>
        <Checkbox />
      </div>
    </>
  )
}
