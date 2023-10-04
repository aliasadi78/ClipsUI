(defrule Menu "" 
=>
(printout t crlf crlf crlf " mahal dard kojast?lotfan yki az gozinehaye zir ra entekhab konid" crlf crlf " 1.) shekam. " crlf crlf " 2.) galo." crlf crlf " 3.) sineh." crlf crlf " 4.) sayer." crlf crlf " 5.) EXIT OF SYSTEM.." crlf crlf crlf " Your answer: ")
(assert ( selectedindex (read))))
(defrule A-shekam "" 
(selectedindex 1)
=>
(printout t crlf crlf crlf" shoma bimary Apandis darid " crlf crlf " Thank you for using my Program... "crlf crlf )
)
(defrule A-shekam "" 
(selectedindex 1)
=>
(printout t crlf crlf crlf" shoma bimary Apandis darid " crlf crlf " Thank you for using my Program... "crlf crlf )
)
(defrule Q-galo-tab "" 
(selectedindex 2)
=>
(printout t crlf crlf crlf " aya shoma tab darid? (Yes | No) " crlf crlf " Your answer: " )
(assert ( ifYesNoTab (read))))
(defrule A-galo-tab-yes  "" 
(selectedindex 2)
(ifYesNoTab yes)
=>
(printout t crlf crlf crlf "shoma glodard bakteraei darid " crlf crlf)
)
(defrule A-galo-tab-no "" 
(selectedindex 2)
(ifYesNoTab no)
=>
(printout t crlf crlf crlf "shoma glodard virosi darid " crlf crlf)
)
(defrule A-sineh "" 
(selectedindex 3)
=>
(printout t crlf crlf crlf" shoma sekteh kardeid " crlf crlf " Thank you for using my Program... "crlf crlf)
)
(defrule Q-sayer-solfeh "" 
(selectedindex 4)
=>
(printout t crlf crlf crlf " aya shoma solfe mikonid? (Yes | No) " crlf crlf " Your answer: ")
(assert ( ifYesNoSolfeh (read))))
(defrule Q-sayer-solfeh-yes-tab "" 
(selectedindex 4)
(ifYesNoSolfeh yes)
=>
(printout t crlf crlf crlf " aya shoma tab darid? (Yes | No) " crlf crlf " Your answer: ")
(assert ( ifYesNoTab (read))))
(defrule A-sayer-solfeh-yes-tab-yes "" 
(selectedindex 4)
(ifYesNoSolfeh yes)
(ifYesNoTab yes)
=>
(printout t crlf crlf crlf" shoma anfolanza darid " crlf crlf " Thank you for using my Program... "crlf crlf)
)
(defrule A-sayer-solfeh-yes-tab-no  "" 
(selectedindex 4)
(ifYesNoSolfeh yes)
(ifYesNoTab no)
=>
(printout t crlf crlf crlf" shoma sarma khordid" crlf crlf " Thank you for using my Program... "crlf crlf)
)
(defrule A-sayer-solfeh-no "" 
(selectedindex 4)
(ifYesNoSolfeh no)
=>
(printout t " moteasefane nmitavanam bimari shoma ra tashkhis daham" crlf crlf " Thank you for using my Program... "crlf crlf)
)