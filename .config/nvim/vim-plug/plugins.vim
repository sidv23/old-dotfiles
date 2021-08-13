" auto-install vim-plug
if empty(glob('~/.config/nvim/autoload/plug.vim'))
  silent !curl -fLo ~/.config/nvim/autoload/plug.vim --create-dirs
    \ https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim
  "autocmd VimEnter * PlugInstall
  "autocmd VimEnter * PlugInstall | source $MYVIMRC
endif


call plug#begin('$HOME/.config/nvim/autoload/plug')

    " Better Syntax Support
    Plug 'sheerun/vim-polyglot'
    " File Explorer
    Plug 'scrooloose/NERDTree'
    " Auto pairs for '(' '[' '{'
    Plug 'jiangmiao/auto-pairs'

    Plug 'kaicataldo/material.vim', { 'branch': 'main' }
    
    Plug 'dracula/vim', { 'as': 'dracula' }
    Plug 'vim-airline/vim-airline'
    Plug 'vim-airline/vim-airline-themes'
    Plug 'bryanmylee/vim-colorscheme-icons'
    Plug 'mhinz/vim-startify'
    Plug 'junegunn/goyo.vim'
    Plug 'junegunn/limelight.vim'
    Plug 'junegunn/seoul256.vim'
    Plug 'junegunn/vim-journal'
    Plug 'junegunn/rainbow_parentheses.vim'
    Plug 'nightsense/forgotten'
    Plug 'zaki/zazen'
    Plug 'jpalardy/vim-slime'

    " Programming Language Support
    Plug 'jpalardy/vim-slime', { 'for': ['python', 'julia']}
    Plug 'hanschen/vim-ipython-cell', { 'for': ['python', 'julia'] }
    Plug 'JuliaEditorSupport/julia-vim'   "already exists in polyglot
    Plug 'jalvesaq/Nvim-R'
call plug#end()
