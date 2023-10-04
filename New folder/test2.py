import clips

template_string = """
(deftemplate person
  (slot name (type STRING))
  (slot surname (type STRING))
  (slot birthdate (type SYMBOL)))
"""

env = clips.Environment()

env.build(template_string)

template = env.find_template('person')

fact = template.assert_fact(name='John',
                            surname='Doe',
                            birthdate=clips.Symbol('01/01/1970'))

assert dict(fact) == {'name': 'John',
                      'surname': 'Doe',
                      'birthdate': clips.Symbol('01/01/1970')}

fact.modify_slots(name='Leeroy',
                  surname='Jenkins',
                  birthdate=clips.Symbol('11/05/2005'))

for fact in env.facts():
    print(fact)

env.run()