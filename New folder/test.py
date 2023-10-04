import clips

DEFTEMPLATE_STRING = """
(deftemplate person
  (slot name (type STRING))
  (slot surname (type STRING))
  (slot birthdate (type SYMBOL)))
"""

# DEFRULE_STRING = """
# (defrule hello-world
#   "Greet a new person."
#   (person (name ?name) (surname ?surname))
#   =>
#   (println "Hello " ?name " " ?surname))
# """
DEFRULE_STRING = """
(defrule Menu
=>
(printout t crlf crlf crlf
" mahal dard kojast?lotfan yki az gozinehaye zir ra entekhab konid" crlf crlf
" 1.) shekam. " crlf crlf
" 2.) galo." crlf crlf
" 3.) sineh." crlf crlf
" 4.) sayer." crlf crlf
" 5.) EXIT OF SYSTEM.." crlf crlf crlf
" Your answer: " )
(assert (selectedindex (read))))
"""
DEFRULE_STRING0 = """
(defrule A-shekam
(selectedindex 1)
=>
(printout t crlf crlf crlf" shoma bimary Apandis darid " crlf
crlf " Thank you for using my Program...
"crlf crlf ))
"""
DEFRULE_STRING00 = """
(defrule A-shekam
(selectedindex 1)
=>
(printout t crlf crlf crlf" shoma bimary Apandis darid " crlf
crlf " Thank you for using my Program...
"crlf crlf ))
"""
DEFRULE_STRING1 = """
(defrule Q-galo-tab
(selectedindex 2)
=>
(printout t crlf crlf crlf " aya shoma tab darid? (Yes | No) " crlf crlf " Your answer: " )
(assert (ifYesNoTab (read))))
"""
DEFRULE_STRING2 = """
(defrule A-galo-tab-yes
(selectedindex 2)
(ifYesNoTab yes)
=>
(printout t crlf crlf crlf "shoma glodard bakteraei darid " crlf crlf))
"""
DEFRULE_STRING3 = """
(defrule A-galo-tab-no
(selectedindex 2)
(ifYesNoTab no)
=>
(printout t crlf crlf crlf "shoma glodard virosi darid " crlf crlf))
"""
DEFRULE_STRING4 = """
(defrule A-sineh
(selectedindex 3)
=>
(printout t crlf crlf crlf" shoma sekteh kardeid " crlf
crlf " Thank you for using my Program...
"crlf crlf ))
"""
DEFRULE_STRING5 = """
(defrule Q-sayer-solfeh
(selectedindex 4)
=>
(printout t crlf crlf crlf " aya shoma solfe mikonid? (Yes | No) " crlf crlf " Your answer: " )
(assert (ifYesNoSolfeh (read))))
"""
DEFRULE_STRING6 = """
(defrule Q-sayer-solfeh-yes-tab
(selectedindex 4)
(ifYesNoSolfeh yes)
=>
(printout t crlf crlf crlf " aya shoma tab darid? (Yes | No) " crlf crlf " Your answer: " )
(assert (ifYesNoTab (read))))
"""
DEFRULE_STRING7 = """
(defrule A-sayer-solfeh-yes-tab-yes
(selectedindex 4)
(ifYesNoSolfeh yes)
(ifYesNoTab yes)
=>
(printout t crlf crlf crlf" shoma anfolanza darid " crlf
crlf " Thank you for using my Program...
"crlf crlf ))
"""
DEFRULE_STRING8 = """
(defrule A-sayer-solfeh-yes-tab-no
(selectedindex 4)
(ifYesNoSolfeh yes)
(ifYesNoTab no)
=>
(printout t crlf crlf crlf" shoma sarma khordid" crlf
crlf " Thank you for using my Program...
"crlf crlf ))
"""
DEFRULE_STRING9 = """
(defrule A-sayer-solfeh-no
(selectedindex 4)
(ifYesNoSolfeh no)
=>
(printout t " moteasefane nmitavanam bimari shoma ra tashkhis daham" crlf
crlf " Thank you for using my Program...
"crlf crlf ))
"""
environment = clips.Environment()

# define constructs
environment.build(DEFTEMPLATE_STRING)
environment.build(DEFRULE_STRING)
environment.build(DEFRULE_STRING0)
environment.build(DEFRULE_STRING00)
environment.build(DEFRULE_STRING1)
environment.build(DEFRULE_STRING2)
environment.build(DEFRULE_STRING3)
environment.build(DEFRULE_STRING4)
environment.build(DEFRULE_STRING5)
environment.build(DEFRULE_STRING6)
environment.build(DEFRULE_STRING7)
environment.build(DEFRULE_STRING8)
environment.build(DEFRULE_STRING9)

# retrieve the fact template
template = environment.find_template('person')

# assert a new fact through its template
fact = template.assert_fact(name='John',
                            surname='Doe',
                            birthdate=clips.Symbol('01/01/1970'))

# fact slots can be accessed as dictionary elements
# assert fact['name'] == 'John'

# execute the activations in the agenda
environment.run()
