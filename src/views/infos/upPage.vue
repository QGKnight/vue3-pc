<template>
  <div class="page">
    <div class="boxs">
      <div class="cell celles">
        <span>所在地区：</span>
        <el-select v-model="provincy" placeholder="请选择">
          <el-option
            v-for="item in option1"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
        <el-select v-model="city" placeholder="请选择">
          <el-option
            v-for="item in options2"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
        <el-select v-model="country" placeholder="请选择">
          <el-option
            v-for="item in options3"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </div>
      <div class="cell">
        <span>产权名称:</span>
        <el-input placeholder="请输入内容" v-model="name" clearable></el-input>
      </div>
      <div class="cell">
        <span>产权类型：</span>
        <el-select v-model="typeIpt" placeholder="请选择">
          <el-option
            v-for="item in types"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </div>
      <div class="cell">
        <span>流转方式：</span>
        <el-select v-model="wayIpt" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </div>
      <div class="cell">
        <span>流转期限:</span>
        <el-input placeholder="请输入内容" v-model="name" clearable></el-input>
      </div>
      <div class="cell">
        <span>申报人:</span>
        <el-input placeholder="请输入内容" v-model="name" clearable></el-input>
      </div>
      <div class="cell">
        <span>身份证号:</span>
        <el-input placeholder="请输入内容" v-model="name" clearable></el-input>
      </div>
      <div class="cell">
        <span>缴款方式：</span>
        <el-select v-model="card" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </div>
      <div class="cell">
        <span>联系电话:</span>
        <el-input placeholder="请输入内容" v-model="name" clearable></el-input>
      </div>
      <div class="cell">
        <span>标段描述:</span>
        <el-input type="textarea" placeholder="请输入内容" v-model="name"></el-input>
      </div>
      <div class="cell">
        <span>图片上传:</span>
        <div class="upBox">
          <el-upload
            action="https://jsonplaceholder.typicode.com/posts/"
            list-type="picture-card"
            :on-preview="handlePictureCardPreview"
            :on-remove="handleRemove"
          >
            <i class="el-icon-plus"></i>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt />
          </el-dialog>
        </div>
      </div>
      <div class="celled">
        <div class="label">
          <span>验&nbsp;&nbsp;证&nbsp;&nbsp;码:</span>
          <el-input placeholder="请输入内容" v-model="name" clearable></el-input>
        </div>
        <div class="btn">获取验证码</div>
      </div>

      <div class="btns">确认申报</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "index",
  data() {
    return {
      typeIpt: "",
      wayIpt: "",
      dialogImageUrl: "",
      dialogVisible: false,
      provincy: "",
      city: "",
      country: "",
      name: "请输入内容",
      num: "412829199945456",
      email: "123456@qq.com",
      mobile: "16601122521",
      card: "",
      ways: [
        {
          value: "选项1",
          label: "租用"
        },
        {
          value: "选项2",
          label: "使用"
        }
      ],
      types: [
        {
          value: "选项1",
          label: "四荒使用权"
        },
        {
          value: "选项2",
          label: "山地使用权"
        }
      ],
      option1: [
        {
          value: "选项1",
          label: "河南省"
        },
        {
          value: "选项2",
          label: "山东省"
        }
      ],
      options2: [
        {
          value: "选项1",
          label: "郑州市"
        },
        {
          value: "选项2",
          label: "汝州市"
        }
      ],
      options3: [
        {
          value: "选项1",
          label: "大浴镇"
        },
        {
          value: "选项2",
          label: "骑岭镇"
        }
      ],
      options: [
        {
          value: "选项1",
          label: "身份证"
        },
        {
          value: "选项2",
          label: "士官证"
        }
      ]
    };
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    }
  }
};
</script>
<style scoped lang="less">
.page {
  padding: 25px;
  .boxs {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .cell {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 500px;
    margin-top: 20px;
    span {
      display: inline-block;
      width: 120px;
      //   text-align: right;
      margin-right: 17px;
      font-size: 16px;
      font-family: PingFang SC;
      font-weight: 500;
      color: rgba(1, 82, 147, 1);
    }
    .el-input {
      width: 557px;
    }
    .el-select {
      width: 557px;
    }
    .el-textarea {
      width: 557px;
    }
    .upBox {
      width: 500px;
      margin-left: -10px;
    }
  }
  .celled {
    margin-top: 20px;
    width: 500px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .label {
      display: flex;
      flex-direction: row;
      align-items: center;
      width: 350px;
      span {
        display: inline-block;
        width: 120px;
        margin-right: 28px;
        font-size: 16px;
        font-weight: 500;
        color: rgba(1, 82, 147, 1);
      }
      .el-input {
        width: 390px;
      }
    }
    .btn {
      border: 1px solid #7ecef4;
      height: 40px;
      line-height: 40px;
      padding: 0 15px;
      border-radius: 5px;
      font-size: 18px;
      font-weight: 500;
      color: #7ecef4;
    }
  }
  .celles {
    .el-select {
      width: 185px;
    }
  }
  .btns {
    margin-top: 45px;
    margin-left: 180px;
    width: 130px;
    height: 40px;
    background: rgba(126, 206, 244, 1);
    border-radius: 5px;
    font-size: 20px;
    font-weight: 500;
    color: rgba(255, 255, 255, 1);
    line-height: 40px;
    text-align: center;
  }
}
</style>