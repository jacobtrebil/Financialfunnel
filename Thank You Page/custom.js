const app = new Vue({
    el: '#app',
        data: {
            firstName: '',
            lastName: '',
            currentAge: ['50'],
            annualIncome: 100000,
            monthlySavings: 1000,
            currentSavings: 400000,
            desiredRetirementAge: 65,
            desiredRetirementIncome: 60000,
            ageOfDeath: 79,
            phoneNumber: 0000000000,
            email: '',
            currentScore: ['C-', 'C+', 'B-', 'B+', 'A-', 'A', 'A+'],
            futureScore: ['C-', 'C+', 'B-', 'B+', 'A-', 'A', 'A+'],
            futureRetirementIncome: ['$61,000', '64,000'],
            initialRetirementAge: ['60', '65'],
            futureRetirementAge: ['57', '50'],
            numberOfImprovements: ['3', '4']      
             }, 
    computed: {
        monthsToSave: (this.desiredRetirementAge - this.currentAge) * 12,
        totalMonthlyIncomes: this.monthlySavings * this.monthsToSave,
        totalSavings: this.currentSavings + this.totalMonthlyIncomes,
        lengthOfRetirement: this.ageOfDeath - this.desiredRetirementAge,
        initialRetirementIncome: this.totalSavings / this.lengthOfRetirement
    },
    // our methods
  methods: {
    getFormValues () {
        this.firstName = this.firstName,
        this.lastName = this.lastName,
        this.currentAge = this.currentAge,
        this.annualIncome = this.annualIncome,
        this.monthlySavings = this.monthlySavings,
        this.currentSavings = this.currentSavings,
        this.desiredRetirementAge = this.desiredRetirementAge,
        this.phoneNumber = this.phoneNumber,
        this.email = this.email
    }
  }
});

console.log(monthsToSave);