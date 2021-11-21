# #using OhMyREPL

atreplinit() do repl
    try
        @eval using OhMyREPL
        @eval OhMyREPL.input_prompt!("Julia " * string(VERSION) * "> ", :green)
        @eval colorscheme!("OneDark")
    catch e
        @warn "error while importing OhMyREPL" e
    end

    @async begin
    # reinstall keybindings to work around https://github.com/KristofferC/OhMyREPL.jl/issues/166
    sleep(1)
    OhMyREPL.Prompt.insert_keybindings()
    end
end
