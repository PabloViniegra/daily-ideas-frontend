'use client'

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { DIFFICULTIES, CATEGORIES } from '@/consts'
import regenerateAction from '@/app/actions/regenerate'
import { useRouter } from 'next/navigation'
import { useState, useTransition } from 'react'
import { cn } from '@/lib/utils'

const ResetIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      className={cn(
        'icon icon-tabler icons-tabler-outline icon-tabler-refresh',
        className
      )}
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <path d='M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4' />
      <path d='M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4' />
    </svg>
  )
}

export default function RegenerateMenu() {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()
  const [open, setOpen] = useState(false)

  const onSubmit = async (formData: FormData) => {
    startTransition(async () => {
      await regenerateAction(formData)
      router.refresh()
      setOpen(false)
    })
  }
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant='default'
          className='rounded-xl shadow-sm font-mono font-semibold w-44 bg-gradient-to-r from-primary to-accent text-primary-foreground border-0 hover:opacity-95 transition-colors'
          disabled={isPending}
          aria-busy={isPending}
        >
          <ResetIcon className='mr-2 size-4' />
          {isPending ? 'Regenerando…' : 'Regenerar'}
        </Button>
      </PopoverTrigger>
      <PopoverContent align='end' className='w-80 p-0 rounded-2xl shadow-md'>
        <Card className='border-0 shadow-none'>
          <CardHeader className='pb-2'>
            <CardTitle className='text-lg font-serif'>
              Regenerar proyectos
            </CardTitle>
          </CardHeader>
          <CardContent className='font-sans tracking-tight'>
            <form action={onSubmit} className='flex flex-col gap-4'>
              <div className='grid gap-2'>
                <Label htmlFor='count'>Cantidad</Label>
                <Input
                  id='count'
                  type='number'
                  name='count'
                  min={1}
                  defaultValue={5}
                  placeholder='5'
                />
              </div>

              <div className='grid gap-2'>
                <Label>Categoría</Label>
                <Select name='category' defaultValue='Web Development'>
                  <SelectTrigger className='rounded-xl'>
                    <SelectValue placeholder='Selecciona una categoría' />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem key='Web Development' value='Web Development'>
                      Web Development
                    </SelectItem>
                    {CATEGORIES.map(category => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className='grid gap-2'>
                <Label>Dificultad</Label>
                <div className='flex flex-col gap-2'>
                  {DIFFICULTIES.map(difficulty => (
                    <label
                      key={difficulty}
                      className='flex items-center gap-2 text-sm'
                    >
                      <input
                        type='checkbox'
                        name='difficulty'
                        value={difficulty}
                        defaultChecked
                        className='h-4 w-4 rounded border-border accent-primary'
                      />
                      <span className='capitalize'>{difficulty}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className='pt-1'>
                <Button
                  type='submit'
                  className='w-full rounded-xl font-mono'
                  disabled={isPending}
                  aria-busy={isPending}
                >
                  {isPending ? 'Regenerando…' : 'Regenerar'}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </PopoverContent>
    </Popover>
  )
}
