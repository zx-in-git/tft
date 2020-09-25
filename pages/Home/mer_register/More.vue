<template>
	<view>
	
		<view class="id-auth-form">
			<view class="type-form-title">身份信息</view>
			<view class="cu-list menu sm-border type-form-bg">
				<view class="cu-item">
					<view class="content">
						<text class="text-grey group-left-title">姓名</text>
					</view>
					<view class="action">
						<input type="text" class="type-form-input" v-model="name" placeholder-class="input-text" placeholder="请输入您的姓名" />
					</view>
				</view>
				<view class="cu-item">
					<view class="content">
						<text class="text-grey group-left-title">商户电话</text>
					</view>
					<view class="action">
						<input type="number" class="type-form-input" v-model="phone" placeholder-class="input-text" placeholder="请输入商户电话" />
					</view>
				</view>
				<view class="cu-item">
					<view class="content">
						<text class="text-grey group-left-title">身份证号</text>
					</view>
					<view class="action">
						<input type="text" class="type-form-input" v-model="idcardNo" placeholder-class="input-text" placeholder="请输入身份证号" />
					</view>
				</view>
				<view class="cu-item ">
					<view class="content" style="flex: 9;">
						<text class="text-grey group-left-title">证件有效期</text>
					</view>
					<view class="action" style="flex: 5;">
						<picker mode="date" :value="cardStartDate" start="2000-01-01" end="2020-09-16" @change="cardStartDateChange">
							<view class="picker" :class="cardStartDate != '' ? 'font-bold' : ''">
								{{cardStartDate == '' ? '开始日期' : cardStartDate}}
							</view>
						</picker>
					</view>
					
					<view class="action arrow" style="flex: 1;">-</view>
					
					<view class="action" style="flex: 5;">
						<picker mode="date" :value="cardEndDate" start="2020-09-16" end="2040370102198605271320
-12-31" @change="cardEndDateChange">
							<view class="picker" :class="cardEndDate != '' ? 'font-bold' : ''">
								{{cardEndDate == '' ? '截止日期' : cardEndDate}}
							</view>
						</picker>
					</view>
				</view>
			</view>
			
			<view class="type-form-title">结算户信息</view>
			<view class="cu-list menu sm-border type-form-bg">
				
				<view class="cu-item">
					<view class="type-form-title">账户类型</view>
					<view class="type-form-bg" style="border: none;">
						<radio-group name="" class="radio-group-block" @change="banktypeChange">
							<view class="left-radio-group" style="display: inline-block;">
								<radio class='red radio' :class="bankType=='0'?'checked':''" value="0"></radio>
								<text class="">对私账户</text>
							</view>
							<view class="left-radio-group" style="display: inline-block;">
								<radio class='red radio' :class="bankType=='2'?'checked':''" value="2"></radio>
								<text>对公账户</text>
							</view>
						</radio-group>
					</view>
				</view>
				
				<view class="cu-item">
					<view class="content">
						<text class="text-grey group-left-title">银行卡号</text>
					</view>
					<view class="action">
						<input type="text" class="type-form-input" v-model="bankCardNo" placeholder-class="input-text" placeholder="请输入银行卡号" />
					</view>
				</view>
				
				<view class="cu-item">
					<view class="content">
						<text class="text-grey group-left-title">银行户名</text>
					</view>
					<view class="action">
						<input type="text" class="type-form-input" v-model="bankAccName" placeholder-class="input-text" placeholder="请输入银行户名" />
					</view>
				</view>
				
				<view class="cu-item">
					<view class="content">
						<text class="text-grey group-left-title">银行名称</text>
					</view>
					<view class="action">
						<input type="text" class="type-form-input" v-model="bankName" placeholder-class="input-text" placeholder="请输入银行名称" />
					</view>
				</view>
				
				<view class="cu-item" v-if="bankType == 2">
					<view class="content">
						<text class="text-grey group-left-title">开户行</text>
					</view>
					<view class="action">
						<input type="text" class="type-form-input" v-model="openBankName" placeholder-class="input-text" placeholder="请输入开户行" />
					</view>
				</view>
			</view>
			
			
			<view class="type-form-title" v-if="merTypeRadio == 1 || merTypeRadio == 0">企业信息</view>
			<view class="cu-list menu sm-border type-form-bg" v-if="merTypeRadio == 1 || merTypeRadio == 0">

				<view class="cu-item">
					<view class="content">
						<text class="text-grey group-left-title">主体信息</text>
					</view>
					<view class="action">
						<input type="text" class="type-form-input" v-model="busTitle" placeholder-class="input-text" placeholder="请填写营业执照主体信息" />
					</view>
				</view>


				<view class="cu-item">
					<view class="content">
						<text class="text-grey group-left-title">营业执照</text>
					</view>
					<view class="action">
						<input type="text" class="type-form-input" v-model="busNo" placeholder-class="input-text" placeholder="请填写营业执照编号" />
					</view>
				</view>
				
				<view class="cu-item">
					<view class="content" style="flex: 9;">
						<text class="text-grey group-left-title">证件有效期</text>
					</view>
					<view class="action arrow" style="flex: 5;">
						<picker mode="date" :value="busStart" start="2000-01-01" end="2020-09-18" @change="BusStartChange">
							<view class="picker" :class="busStart != '' ? 'font-bold' : ''">
								{{busStart == '' ? '开始时间' : busStart}}
							</view>
						</picker>
					</view>
					
					<view class="action arrow" style="flex: 1;">-</view>
					
					<view class="action arrow" style="flex: 5;">
						<picker mode="date" :value="busEnd" start="2020-09-18" end="2035-12-31" @change="BusEndChange">
							<view class="picker" :class="busEnd != '' ? 'font-bold' : ''">
								{{busEnd == '' ? '截止时间' : busEnd}}
							</view>
						</picker>
					</view>
				</view>
			</view>
		</view>
		
		<view class="type-foot">
			<view class="flex flex-direction">
				<button class="cu-btn margin-tb-sm lg" @click="submit">提交</button>
			</view>
		</view>
		
		
		<view class="cu-load load-modal" v-if="loadModal.show">
		   <image src="/static/public/loading.png" mode="aspectFit"></image>
		   <view class="gray-text">{{ loadModal.text }}</view>
		</view>
	</view>
</template>

<script>
	import net from '@/common/net.js';
	
	export default {
		data() {
			return {
				loadModal: { show: false, text: '加载中...' },
				
				
				merTypeRadio: 0,
				address:"",
				MccCode:"",
				regionCode: '',
				
				
				// 身份信息
				name: '',
				phone: '',	
				idcardNo: '',
				cardStartDate: '',
				cardEndDate: '',
				
				// 结算户信息
				bankType: 0,
				bankCardNo: '',
				bankName: '',
				openBankName: '',
				bankAccName: '',
				
				// 营业执照信息
				busTitle: '',
				busNo: '',
				busStart: '',
				busEnd:'',
			}
		},
		
		/**
		 * 页面初始化的时候 接收上个页面传递过来的参数
		 */
		onLoad(options) {
			this.merTypeRadio = options.type;
			this.address 	  = options.address;
			this.MccCode 	  = options.mcc;
			this.regionCode   = options.regionCode;
		},
		
		methods: {
			banktypeChange(e){
				this.bankType = e.detail.value;
			},
			
			cardStartDateChange(e) {
				this.cardStartDate = e.detail.value
			},
			
			cardEndDateChange(e) {
				this.cardEndDate = e.detail.value
			},
			
			BusStartChange(e){
				this.busStart = e.detail.value
			},
			
			BusEndChange(e){
				this.busEnd = e.detail.value
			},
			
			/**
			 * 提交数据时座简单验证
			 */
			submit(){
				
				if(this.MccCode == 0  || !this.MccCode){
					uni.showToast({ title: '请选择商户类别', icon: 'none' });
					return false;
				}
				
				if(this.regionCode == '' || !this.regionCode){
					uni.showToast({ title: '请选择商户地址', icon: 'none' });
					return false;	
				}
				
				if(this.address == '' || !this.address){
					uni.showToast({ title: '请填写详细地址', icon: 'none' });
					return false;	
				}
				
				
				if(this.name == ""){
					uni.showToast({ title: '请填写商户法人姓名', icon: 'none' });
					return false;	
				}
				
				if(this.phone == ""){
					uni.showToast({ title: '请填写商户法人手机号', icon: 'none' });
					return false;	
				}
				
				if(this.idcardNo == ""){
					uni.showToast({ title: '请填写商户法人身份证', icon: 'none' });
					return false;	
				}
				
				if(this.cardStartDate == "" || this.cardEndDate == ""){
					uni.showToast({ title: '请选择身份证有效期', icon: 'none' });
					return false;	
				}
				
				if(this.bankCardNo == ""){
					uni.showToast({ title: '请填写结算卡号', icon: 'none' });
					return false;	
				}
				
				if(this.bankAccName == ""){
					uni.showToast({ title: '请填写结算卡户名', icon: 'none' });
					return false;	
				}
				
				if(this.bankName == ""){
					uni.showToast({ title: '请填写银行名称', icon: 'none' });
					return false;	
				}
				
				this.loadModal.show = "入网中...";
				this.loadModal.show = true;
				
		    	net({ url:"/V1/net-in", method:'post', data:{
						merTypeRadio: 	this.merTypeRadio,
						MccCode: 		this.MccCode,
						regionCode: 	this.regionCode,
						address:		this.address,
						name:			this.name,
						phone:			this.phone,
						idcardNo:		this.idcardNo,
						cardStartDate:	this.cardStartDate,
						cardEndDate:	this.cardEndDate,
						bankCardNo:		this.bankCardNo,
						bankAccName:	this.bankAccName,
						bankName:		this.bankName,
						bankType:		this.bankType
					},	
		            success: (res) => {
						console.log(res)
						this.loadModal.show = false;
						if (res.data.success) {
							uni.showToast({ title: res.data.success.message, icon: 'none',
								success : function(){
									setTimeout(function() { uni.navigateBack(); }, 1500);
								}
							});
						}else 
							uni.showToast({ title: res.data.error.message, icon: 'none' });
						
		            },
					fail: (res) =>{
						this.loadModal.show = false;
					},
					
		      	})

			}
		}
	}
</script>

<style lang="scss">
@import 'style/index.scss';
</style>
