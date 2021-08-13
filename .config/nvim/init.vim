source $HOME/.config/nvim/vim-plug/plugins.vim
set runtimepath^=~/.vim runtimepath+=~/.vim/after
let &packpath = &runtimepath
source ~/.vim/vimrc

if (has('nvim'))
  let $NVIM_TUI_ENABLE_TRUE_COLOR = 0
endif

if (has('termguicolors'))
  set termguicolors
endif

let NERDTreeShowHidden=1

" colorscheme material
" let g:material_theme_style = 'darkest'

syntax on
color dracula

let g:airline_powerline_fonts = 1
" let g:airline_section_z = ' %{strftime("%-I:%M %p")}'
let g:airline_section_warning = ''

tmap <Esc> <C-\><C-n>
tmap <C-w> <Esc><C-w>
"tmap <C-d> <Esc>:q<CR>
autocmd BufWinEnter,WinEnter term://* startinsert
autocmd BufLeave term://* stopinsert


let g:tagbar_width = 30

let g:startify_fortune_use_unicode = 1

autocmd VimEnter *
    \   if !argc()
    \ |   Startify
    \ |   NERDTree
    \ |   wincmd w
    \ | endif


