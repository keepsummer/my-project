

<template>
  <div>
   <table>
     <tr>
       <td>编号</td>
       <td>名字</td>
       <td>部门</td>
       <td>工资</td>
     </tr>
     <tr v-for ="item in  demps">
       <td>{{item.id}}</td>
       <td>{{item.name}}</td>
       <td>{{item.dept}}</td>
       <td>{{item.salary}}</td>
     </tr>
   </table>
    {{msg}}
  </div>
</template>

<script>
  import axios from "axios";

  export default {
    name: 'Dept',
    data(){
      return{
        msg:'Hello vue',
        demps:[
          {
            id:1,
            name:"张三",
            dept:1010,
            salary:4000,

          },
          {
            id:2,
            name:"李四",
            dept:1020,
            salary:7000,

          },
        {
          id:3,
          name:"王五",
          dept:1030,
          salary:2000,

        }
      ]
      }
    },
    created() {
      const _this = this
      axios.get('http://localhost:8081/employees/findAll').then(function (resp){
          _this.demps = resp.data

      })
    }
  }
</script>

<style scoped>

</style>
