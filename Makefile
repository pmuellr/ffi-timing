BASENAME = ffi-timing

#-------------------------------------------------------------------------------
main:
		@echo "run 'make mac', 'make linux' or 'make clean'"

mac:   $(BASENAME).dylib
linux: $(BASENAME).so

#-------------------------------------------------------------------------------
$(BASENAME).so: $(BASENAME).o
		gcc -shared -o $@ $<

#-------------------------------------------------------------------------------
$(BASENAME).dylib: $(BASENAME).o
		gcc -shared -o $@ $<

#-------------------------------------------------------------------------------
$(BASENAME).o: $(BASENAME).c
		gcc -c -Wall -Werror -fpic $<

#-------------------------------------------------------------------------------
clean:
		-rm $(BASENAME).o
		-rm $(BASENAME).dylib
		-rm $(BASENAME).so
