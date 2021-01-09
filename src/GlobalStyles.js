import { createGlobalStyle } from 'styled-components';
import { normalize } from 'polished';

export default createGlobalStyle`
  ${normalize()}

  body {
    background-color: #f0f2f5!important;
  }
  .ant-modal {
    animation-duration: 0s !important;
    transition: none !important;
  }

  .ant-notification-notice {
    background: #ffFBE6 !important;
    width:373px !important;
    height:113px !important;
  }

  .anticon.ant-notification-notice-icon-info {
    color: #FAAD13!important;
}
  .ant-notification {
    color: #000000!important;
    top:63px!important;
  }
  .ant-modal-confirm-body > .anticon + .ant-modal-confirm-title + .ant-modal-confirm-content {
    margin-bottom: 40px;
  }

  .ant-modal-confirm-body .ant-modal-confirm-content {
    margin-top: 12px;
  }

  .ant-table-title {
    top: 0 !important;
    padding-right: 0 !important;
    padding: 12px 5px !important;
    /* background: #6EB166; */
  }

  .fw-600 {
    font-weight: 600;
  }

  .text-dark {
    color: rgba(0, 0, 0, 0.85);
  }

  .text-right {
    text-align: right;
  }

  .text-center {
    text-align: center;
  }

  .text-warning {
    color: #faad14;
  }

  .text-danger {
    color: #dc3545!important
  }

  .bg-light-grey {
    background: #fafafa;
  }

  .ant-empty-description {
    color:  rgb(23, 23, 23) !important;
  }
  .ant-table-wrapper{
    padding: 0 24px;
    background-color: #FFFFFF;
  }
  thead[class*="ant-table-thead"] th{
    background: -webkit-linear-gradient(#68AEB3E6, #68AEB3)!important;
    background: -o-linear-gradient(#68AEB3E6, #68AEB3)!important;
    background: -moz-linear-gradient(#68AEB3E6, #68AEB3)!important;
    background: linear-gradient(#68AEB3E6, #68AEB3)!important;
    color: #FFFFFF !important;
    height: 40px!important;
    padding: 8px 9px !important;
    border-radius:0px!important;
  }
  ant-table-header-column {
    color: #FFFFFF !important;
  }
  .ant-select-selection {
    /* background: #3b3b4d !important; */
  }
  .ant-table-header {
    background: rgb(240, 242, 245) !important;;
}
.ant-table-empty .ant-table-placeholder {
  padding: 0 !important;
  background: #FFFFFF !important;
}
.ant-tabs-nav .ant-tabs-tab-active {
    color: #68AEB3!important;
    font-size: 14px!important;
}
.ant-tabs-ink-bar {
  background: #68AEB3 !important;
}
.ant-tabs-bar {
  border-bottom: 0px solid #e8e8e8!important;
}

  .ant-layout {
    /* background: #F7F7F7 !important; */
  }

  .ant-table-tbody > tr.ant-table-row-selected td,
  .ant-table-placeholder {
    background: transparent !important;
  }

  tr.ant-table-expanded-row, tr.ant-table-expanded-row:hover {
    background: transparent !important;
  }

  .ant-table-body{
    &::-webkit-scrollbar {
      height: 5px!important;
      padding-right:10px!important;
    }
    &::-webkit-scrollbar-thumb {
      padding-right:10px!important;
      border-radius: 5px!important;
      -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
      background: #737372!important;
    }
    &::-webkit-scrollbar-track {
      -webkit-box-shadow: 0!important;
      border-radius: 0!important;
      /* background: #191f28!important; */
    }
    .ant-checkbox-checked .ant-checkbox-inner {
      background-color: rgba(109,177,182,1)!important;
     border-color: rgb(244, 247, 247)!important;
    }
    div.ant-table-header.ant-table-hide-scrollbar {
      background: #68aeb3 !important;
    }
  }
  /* ant-modal Dialog */
  .ant-modal-footer{
    display: flex!important;
    justify-content: center!important;
  }
  .ant-modal-title {
    color: #67ADB3!important;
  }
  .ant-modal-header {
    margin: 0 10px!important;
    border-bottom: 2px solid #67ADB3!important;
  }
  .ant-modal-close-x{
    color: #67ADB3!important;
  }
  .ant-modal-footer {
    border-top: 0px solid #e8e8e8!important;
  }
`;
