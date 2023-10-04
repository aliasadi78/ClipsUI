# import clips
# environment = clips.Environment()
# DEFRULE_STRING0= """
# (defrule Menu 
# =>
# (printout t crlf crlf crlf " mahal dard kojast?lotfan yki az gozinehaye zir ra entekhab konid" crlf crlf " 1.) shekam. " crlf crlf " 2.) galo." crlf crlf " 3.) sineh." crlf crlf " 4.) sayer." crlf crlf " 5.) EXIT OF SYSTEM.." crlf crlf crlf " Your answer: ")
# (assert (selectedindex (read))))"""
# environment.build(DEFRULE_STRING0)
# DEFRULE_STRING1= """ (defrule A-shekam "" 
# (selectedindex 1)
# =>
# (printout t crlf crlf crlf " aya shoma tab darid? (Yes | No) " crlf crlf " Your answer: ")
# (assert ( ifYesNoTab (read))))"""
# environment.build(DEFRULE_STRING1)
# DEFRULE_STRING2= """ (defrule A-galo-tab-yes  "" 
# (selectedindex 2)
# (ifYesNoTab yes)
# =>
# (printout t crlf crlf crlf "shoma glodard bakteraei darid " crlf crlf)
# )"""
# environment.build(DEFRULE_STRING2)
# DEFRULE_STRING3= """ (defrule A-galo-tab-no "" 
# (selectedindex 2)
# (ifYesNoTab no)
# =>
# (printout t crlf crlf crlf "shoma glodard virosi darid " crlf crlf)
# )"""
# environment.build(DEFRULE_STRING3)
# DEFRULE_STRING4= """ (defrule A-sineh "" 
# (selectedindex 3)
# =>
# (printout t crlf crlf crlf" shoma sekteh kardeid " crlf crlf " Thank you for using my Program... "crlf crlf)
# )"""
# environment.build(DEFRULE_STRING4)
# DEFRULE_STRING5= """ (defrule Q-sayer-solfeh "" 
# (selectedindex 4)
# =>
# (printout t crlf crlf crlf " aya shoma solfe mikonid? (Yes | No) " crlf crlf " Your answer: ")
# (assert ( ifYesNoSolfeh (read))))"""
# environment.build(DEFRULE_STRING5)
# DEFRULE_STRING6= """ (defrule Q-sayer-solfeh-yes-tab "" 
# (selectedindex 4)
# (ifYesNoSolfeh yes)
# =>
# (printout t crlf crlf crlf " aya shoma tab darid? (Yes | No) " crlf crlf " Your answer: ")
# (assert ( ifYesNoTab (read))))"""
# environment.build(DEFRULE_STRING6)
# DEFRULE_STRING7= """ (defrule A-sayer-solfeh-yes-tab-yes "" 
# (selectedindex 4)
# (ifYesNoSolfeh yes)
# (ifYesNoTab yes)
# =>
# (printout t crlf crlf crlf" shoma anfolanza darid " crlf crlf " Thank you for using my Program... "crlf crlf)
# )"""
# environment.build(DEFRULE_STRING7)
# DEFRULE_STRING8= """ (defrule A-sayer-solfeh-yes-tab-yes "" 
# (selectedindex 4)
# (ifYesNoSolfeh yes)
# (ifYesNoTab yes)
# =>
# (printout t crlf crlf crlf" shoma anfolanza darid " crlf crlf " Thank you for using my Program... "crlf crlf)
# )"""
# environment.build(DEFRULE_STRING8)
# DEFRULE_STRING9= """ (defrule Q-sayer-solfeh-yes-tab "" 
# (selectedindex 4)
# (ifYesNoSolfeh yes)
# =>
# (printout t crlf crlf crlf " aya shoma tab darid? (Yes | No) " crlf crlf " Your answer: ")
# (assert ( ifYesNoTab (read))))"""
# environment.build(DEFRULE_STRING9)
# DEFRULE_STRING10= """ (defrule Q-sayer-solfeh "" 
# (selectedindex 4)
# =>
# (printout t crlf crlf crlf " aya shoma solfe mikonid? (Yes | No) " crlf crlf " Your answer: ")
# (assert ( ifYesNoSolfeh (read))))"""
# environment.build(DEFRULE_STRING10)
# DEFRULE_STRING11= """ (defrule A-sineh "" 
# (selectedindex 3)
# =>
# (printout t crlf crlf crlf" shoma sekteh kardeid " crlf crlf " Thank you for using my Program... "crlf crlf)
# )"""
# environment.build(DEFRULE_STRING11)
# DEFRULE_STRING12= """ (defrule A-galo-tab-no "" 
# (selectedindex 2)
# (ifYesNoTab no)
# =>
# (printout t crlf crlf crlf "shoma glodard virosi darid " crlf crlf)
# )"""
# environment.build(DEFRULE_STRING12)
# DEFRULE_STRING13= """ (defrule A-sayer-solfeh-yes-tab-no "" 
# (selectedindex 4)
# (ifYesNoSolfeh yes)
# (ifYesNoTab no)
# =>
# (printout t crlf crlf crlf" shoma sarma khordid" crlf crlf " Thank you for using my Program... "crlf crlf)
# )"""
# environment.build(DEFRULE_STRING13)
# DEFRULE_STRING14= """ (defrule A-sayer-solfeh-no "" 
# (selectedindex 4)
# (ifYesNoSolfeh no)
# =>
# (printout t " moteasefane nmitavanam bimari shoma ra tashkhis daham" crlf crlf " Thank you for using my Program... "crlf crlf)
# )"""
# environment.build(DEFRULE_STRING14)
# environment.run()
import clips
environment = clips.Environment()
DEFRULE_STRING0= """ (defrule Menu "" 
=>
(printout t crlf crlf crlf " mahal dard kojast?lotfan yki az gozinehaye zir ra entekhab konid" crlf crlf " 1.) shekam. " crlf crlf " 2.) galo." crlf crlf " 3.) sineh." crlf crlf " 4.) sayer." crlf crlf " 5.) EXIT OF SYSTEM.." crlf crlf crlf " Your answer: ")
(assert ( selectedindex (read))))"""
environment.build(DEFRULE_STRING0)
DEFRULE_STRING1= """ (defrule A-shekam "" 
(selectedindex 1)
=>
(printout t crlf crlf crlf" shoma bimary Apandis darid " crlf crlf " Thank you for using my Program... "crlf crlf )
)"""
environment.build(DEFRULE_STRING1)
DEFRULE_STRING2= """ (defrule A-shekam "" 
(selectedindex 1)
=>
(printout t crlf crlf crlf" shoma bimary Apandis darid " crlf crlf " Thank you for using my Program... "crlf crlf )
)"""
environment.build(DEFRULE_STRING2)
DEFRULE_STRING3= """ (defrule Q-galo-tab "" 
(selectedindex 2)
=>
(printout t crlf crlf crlf " aya shoma tab darid? (Yes | No) " crlf crlf " Your answer: " )
(assert ( ifYesNoTab (read))))"""
environment.build(DEFRULE_STRING3)
DEFRULE_STRING4= """ (defrule A-galo-tab-yes  "" 
(selectedindex 2)
(ifYesNoTab yes)
=>
(printout t crlf crlf crlf "shoma glodard bakteraei darid " crlf crlf)
)"""
environment.build(DEFRULE_STRING4)
DEFRULE_STRING5= """ (defrule A-galo-tab-no "" 
(selectedindex 2)
(ifYesNoTab no)
=>
(printout t crlf crlf crlf "shoma glodard virosi darid " crlf crlf)
)"""
environment.build(DEFRULE_STRING5)
DEFRULE_STRING6= """ (defrule A-sineh "" 
(selectedindex 3)
=>
(printout t crlf crlf crlf" shoma sekteh kardeid " crlf crlf " Thank you for using my Program... "crlf crlf)
)"""
environment.build(DEFRULE_STRING6)
DEFRULE_STRING7= """ (defrule Q-sayer-solfeh "" 
(selectedindex 4)
=>
(printout t crlf crlf crlf " aya shoma solfe mikonid? (Yes | No) " crlf crlf " Your answer: ")
(assert ( ifYesNoSolfeh (read))))"""
environment.build(DEFRULE_STRING7)
DEFRULE_STRING8= """ (defrule Q-sayer-solfeh-yes-tab "" 
(selectedindex 4)
(ifYesNoSolfeh yes)
=>
(printout t crlf crlf crlf " aya shoma tab darid? (Yes | No) " crlf crlf " Your answer: ")
(assert ( ifYesNoTab (read))))"""
environment.build(DEFRULE_STRING8)
DEFRULE_STRING9= """ (defrule A-sayer-solfeh-yes-tab-yes "" 
(selectedindex 4)
(ifYesNoSolfeh yes)
(ifYesNoTab yes)
=>
(printout t crlf crlf crlf" shoma anfolanza darid " crlf crlf " Thank you for using my Program... "crlf crlf)
)"""
environment.build(DEFRULE_STRING9)
DEFRULE_STRING10= """ (defrule A-sayer-solfeh-yes-tab-no  "" 
(selectedindex 4)
(ifYesNoSolfeh yes)
(ifYesNoTab no)
=>
(printout t crlf crlf crlf" shoma sarma khordid" crlf crlf " Thank you for using my Program... "crlf crlf)
)"""
environment.build(DEFRULE_STRING10)
DEFRULE_STRING11= """ (defrule A-sayer-solfeh-no "" 
(selectedindex 4)
(ifYesNoSolfeh no)
=>
(printout t " moteasefane nmitavanam bimari shoma ra tashkhis daham" crlf crlf " Thank you for using my Program... "crlf crlf)
)"""
environment.build(DEFRULE_STRING11)
environment.run()