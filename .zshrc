# Fig pre block. Keep at the top of this file.
[[ -f "$HOME/.fig/shell/zshrc.pre.zsh" ]] && builtin source "$HOME/.fig/shell/zshrc.pre.zsh"
# Starship
eval "$(starship init zsh)"

##########################################
# Added by Siddharth
export LC_ALL=en_US.UTF-8
export CLICOLOR=1
export LSCOLORS=ExFxBxDxCxegedabagacad

##########################################
export PYTHONSTARTUP=~/.pythonrc
export PIPENV_VENV_IN_PROJECT="enabled"
# export R_HOME=/Library/Frameworks/R.framework/Resources
export RSTUDIO_PANDOC=/Applications/RStudio.app/Contents/MacOS/pandoc
export STARSHIP_CONFIG=~/.config/starship.toml
# # PyEnvs
export PYENV_ROOT="$HOME/.pyenv" 
export PATH="$PYENV_ROOT/bin:$PATH"

##########################################
# Oh My ZSH

# If you come from bash you might have to change your $PATH.
export PATH=$HOME/bin:/usr/local/bin:$PATH

# Path to your oh-my-zsh installation.
export ZSH="/Users/vishwanathgl/.oh-my-zsh"
ENABLE_CORRECTION="true"
DISABLE_UNTRACKED_FILES_DIRTY="true"
ZSH_DISABLE_COMPFIX="true"
plugins=(zsh-autosuggestions)
source $ZSH/oh-my-zsh.sh


##########################################
# # Python path managed via Homebrew
export PATH="$(brew --prefix)/opt/python/libexec/bin:$PATH"

# #### IMPORTANT ALIASES ######
alias ls=' exa --group-directories-first --icons'

# alias code='code-insiders'
source $HOME/.bash_profile
source $HOME/.zsh_aliases
source $HOME/.zsh_exports
source ~/z.sh

# >>> conda initialize >>>
# !! Contents within this block are managed by 'conda init' !!
__conda_setup="$('/Users/vishwanathgl/mambaforge/bin/conda' 'shell.zsh' 'hook' 2> /dev/null)"
if [ $? -eq 0 ]; then
    eval "$__conda_setup"
else
    if [ -f "/Users/vishwanathgl/mambaforge/etc/profile.d/conda.sh" ]; then
        . "/Users/vishwanathgl/mambaforge/etc/profile.d/conda.sh"
    else
        export PATH="/Users/vishwanathgl/mambaforge/bin:$PATH"
    fi
fi
unset __conda_setup

if [ -f "/Users/vishwanathgl/mambaforge/etc/profile.d/mamba.sh" ]; then
    . "/Users/vishwanathgl/mambaforge/etc/profile.d/mamba.sh"
fi
# <<< conda initialize <<<

test -e "${HOME}/.iterm2_shell_integration.zsh" && source "${HOME}/.iterm2_shell_integration.zsh"

# Fig post block. Keep at the bottom of this file.
[[ -f "$HOME/.fig/shell/zshrc.post.zsh" ]] && builtin source "$HOME/.fig/shell/zshrc.post.zsh"
